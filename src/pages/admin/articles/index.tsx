import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import lodash from 'lodash';

import { Table, Input, Button, Spin, Tag } from '@/components';
import { IPost } from '@/types';
import { fetchArticles, deletePost, updatePost, addPost } from '@/apis';
import { BASE_URL } from '@/configs/environment';

import { ArticleEditor } from '../_partial/article-editor';
import { Header } from '../_partial/admin-container-layout';
import { getLocalStorage } from '../index';

interface IArticleTable {
  id: React.ReactNode;
  uid: React.ReactNode;
  createAt: React.ReactNode;
  updateAt: React.ReactNode;
  title: React.ReactNode;
  author: React.ReactNode;
  cover: React.ReactNode;
  tags: React.ReactNode;
  excerpt: React.ReactNode;
  format: React.ReactNode;
  status: React.ReactNode;
  edit: React.ReactNode;
}

const Article = styled.div`
  .options {
    display: flex;
    align-items: center;
  }
`;

const TableContainer = styled.div`
  margin-top: 16px;
  width: 90%;
  .table {
    text-align: center;
  }
  .prev-next {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 16px 0;
  }
`;

const emptyArticle: IPost = {
  title: '',
  author: '',
  updateAt: undefined,
  createAt: undefined,
  content: '',
  cover: '',
  uid: undefined,
  id: undefined,
  excerpt: '',
  tags: '',
  format: 'html',
  status: 'draft',
};

export default function AdminArticlePage(): React.ReactElement {
  // 文章列表
  const [articleList, setArticleList] = React.useState<IPost[]>();
  // 搜索框
  const [searchValue, setSearchValue] = React.useState('');
  // 当前文章偏移量
  const [currentOffset, setCurrentOffset] = React.useState(0);
  // 选定的文章对象
  const [selectedArticle, setSelectedArticle] = React.useState<IPost>();
  // 上一页、下一页按钮是否可用
  const [hasPrev, setHasPrev] = React.useState(false);
  const [hasNext, setHasNext] = React.useState(true);
  // refresh this component
  const [refresh, setRefresh] = React.useState(0);

  const pageLimit = 6;

  const heads = [
    { field: 'id', name: 'ID', },
    { field: 'uid', name: 'UID', width: 100, height: 20, },
    { field: 'createAt', name: '创建日期', width: 100, },
    { field: 'updateAt', name: '更新日期', width: 100, },
    { field: 'title', name: '标题', },
    { field: 'author', name: '作者', },
    { field: 'cover', name: '封面', width: 100, },
    { field: 'tags', name: '标签', },
    { field: 'excerpt', name: '摘要', width: 200, },
    { field: 'format', name: '文档格式', },
    { field: 'status', name: '状态', },
    { field: 'edit', name: '编辑', width: 120, },
  ];

  const handleAdd = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setSelectedArticle(emptyArticle);
  };

  /**
   * 处理点击列表中【编辑】按钮事件
   * @param e 鼠标事件
   * @param article 文章对象
   */
  const handleEdit = (article: IPost) => {
    setSelectedArticle(article);
  };

  const handleDelete = (article: IPost) => {
    if (window.confirm('确定要删除吗？')) {
      deletePost(article.uid)
        .then(() => {
          window.alert('删除成功');
          setRefresh(Math.random());
        });
    }
  };

  /**
   * 处理点击文章【更新】按钮事件
   * @param e 鼠标事件
   * @param newArticle 修改后的文章对象
   */
  const handleUpdate = (e: React.MouseEvent<HTMLElement>, a: IPost) => {
    e.preventDefault();
    if (!a.uid) {
      delete a.uid;
      delete a.id;
      delete a.createAt;
      delete a.updateAt;
      addPost(a)
        .then(() => {
          window.alert('添加成功');
          setSelectedArticle(undefined);
        });
    } else {
      updatePost(a.uid, a)
        .then(() => {
          window.alert('更新成功');
          setSelectedArticle(undefined);
        });
    }
  };

  /**
   * 处理点击【文章编辑器】的【关闭】或【取消】按钮事件
   * @param e 鼠标事件
   */
  const handleEditorClose = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setSelectedArticle(undefined);
  };

  /**
   * 处理点击【上一页】按钮事件
   * @param e 鼠标事件
   */
  const handlePrev = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setArticleList(undefined);
    setCurrentOffset(currentOffset - pageLimit);
  };

  /**
   * 处理点击【下一页】按钮事件
   * @param e 鼠标事件
   */
  const handleNext = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setArticleList(undefined);
    setCurrentOffset(currentOffset + pageLimit);
  };

  /**
   * get the article lists.
   * @param offset offset to the start;
   * @param limit page size
   */
  const getArticleList = async (offset = 0, limit: number) => {
    const data = await fetchArticles(offset, limit);
    if (data) {
      if (data.amount < limit) setHasNext(false);
      else setHasNext(true);
      setArticleList(data.posts);
    }
  };

  /**
   * (1)组件挂载时;
   * (2)offset改变时;
   * (3)选择的文章改变时;
   * 重新获取文章列表
   */
  React.useEffect(() => {
    // console.log('current offset', currentOffset);
    // 判断是否是第一页
    if (currentOffset <= 0) {
      setHasPrev(false);
    } else {
      setHasPrev(true);
    }

    getArticleList(currentOffset, pageLimit);
  }, [currentOffset, refresh, selectedArticle]);

  return (
    <Article>
      <Header>
        <Header.Title>文章管理</Header.Title>
        <Header.Add>
          <Button onClick={handleAdd}>新增</Button>
        </Header.Add>
      </Header>
      <div className="options">
        <span>搜索文章</span>
        <Input value={searchValue} onChange={e => setSearchValue(e.target.value)} />
        <Button onClick={e => e.preventDefault()}>确定</Button>
      </div>
      <TableContainer>
        <div className="table">
          {
            articleList
              ? <Table
                data={toTableData(articleList, handleEdit, handleDelete)}
                heads={heads}
              />
              : <Spin />}
        </div>
        <div className="prev-next">
          <Button onClick={handlePrev} disabled={!hasPrev}>Prev</Button>
          <Button onClick={handleNext} disabled={!hasNext}>Next</Button>
        </div>
      </TableContainer>
      <ArticleEditor
        article={selectedArticle}
        visible={Boolean(selectedArticle)}
        onSubmit={(e, a) => handleUpdate(e, a)}
        onClose={handleEditorClose}
      />
    </Article>
  );
}

/**
 * 处理文章列表 使其满足列表的格式要求
 * @param articleList 原生的文章列表
 * @returns 处理后的文章列表
 */
const toTableData = (
  articleList: IPost[],
  onEdit: (p: IPost) => void,
  onDel: (p: IPost) => void
) => {
  return articleList.map((article) => {
    return {
      id: <span style={{fontSize: 14}}>{article.id}</span>,
      uid: <span style={{fontSize: 12}}>{article.uid.slice(0, 6)+'...'}</span>,
      createAt: <span>{dayjs.unix(article.createAt).format('YYYY-MM-DD')}</span>,
      updateAt: <span>{dayjs.unix(article.updateAt).format('YYYY-MM-DD')}</span>,
      title: <span>{article.title}</span>,
      author: <span>{article.author}</span>,
      cover: renderCover(article.cover, article.title),
      tags: renderTags(article.tags),
      excerpt: <span>{article.excerpt}</span>,
      format: <span>{article.format}</span>,
      status: renderStatus(article.status),
      edit: renderEdit(article, onEdit, onDel),
    };
  });
};

const renderTags = (tags: string) => {
  return (
    <span>{tags.split('|').map((t, i) => <Tag key={i}>{t}</Tag>)}</span>
  );
};

const renderCover = (cover: string, title:string) => {
  return (
    <img
      src={BASE_URL + cover}
      alt={title}
      style={{ width: 100, height: 80, objectFit: 'cover' }}
    />
  );
};

const renderStatus = (status: string) => {
  let s = '';
  if (status === 'publish') s = '已发表';
  else if (status === 'draft') s = '草稿';
  return (
    <span>{s}</span>
  );
};

const renderEdit = (
  a: IPost,
  onEdit: (a: IPost) => void,
  onDel: (a: IPost) => void
) => {
  const { token } = getLocalStorage();
  const isLogin = token === null ? false : true;
  return (
    <span>
      <Button onClick={() => onEdit(a)} disabled={!isLogin}>编辑</Button>
      <Button onClick={() => onDel(a)} danger disabled={!isLogin}>删除</Button>
    </span>
  );
};
