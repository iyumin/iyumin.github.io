import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import lodash from 'lodash';

import { Table, Input, Button, Spin, Tag } from '@/components';
import { apiV2 } from '@/utils';
import { IArticle } from '@/types';

import { ArticleEditor } from '../_partial/article-editor';
import { Header } from '../_partial/admin-container-layout';

interface IArticleTable extends IArticle {
  showCover: React.ReactNode;
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

const emptyArticle: IArticle = {
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
  extension: 'html',
  publish: 'draft',
};

export default function AdminArticlePage () :React.ReactElement {
  // 文章列表
  const [articleList, setArticleList] = React.useState<Array<IArticleTable>>();
  // 搜索框
  const [searchValue, setSearchValue] = React.useState('');
  // 当前文章偏移量
  const [currentOffset, setCurrentOffset] = React.useState(0);
  // 选定的文章对象
  const [selectedArticle, setSelectedArticle] = React.useState<IArticle>();
  // 上一页、下一页按钮是否可用
  const [isPrevButtonDisable, setIsPrevButtonDisable] = React.useState(false);
  const [isNextButtonDisable, setIsNextButtonDisable] = React.useState(false);
  // refresh this component
  const [refresh, setRefresh] = React.useState(0);

  const pageLimit = 6;

  const heads = [
    { field: 'id', name: 'ID', },
    { field: 'uid', name: 'UID', width: 100, height: 20, },
    { field: 'createAt', name: '创建日期', width: 100, },
    { field: 'updateAt', name: '更新日期', width: 100, },
    { field: 'publish', name: '是否发布', },
    { field: 'title', name: '标题', },
    { field: 'author', name: '作者', },
    // { field: 'tags', name: '标签', },
    { field: 'extension', name: '文档格式', },
    { field: 'excerpt', name: '摘要', width: 200, },
    { field: 'showCover', name: '封面', width: 100, },
    { field: 'showTags', name: '标签', },
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
  const handleEdit = (e: React.MouseEvent<HTMLElement>, article: IArticle) => {
    e.preventDefault();
    setSelectedArticle(article);
  };

  const handleDelete = (e: React.MouseEvent<HTMLElement>, article: IArticle) => {
    e.preventDefault();
    if (window.confirm('确定要删除吗？')) {
      apiV2
        .delete(`/article?uid=${article.uid}`)
        .then(res => {window.alert(res.data.msg); setRefresh(Math.random());})
        .catch(err => window.alert(err.response.data.msg));
    }
  };

  /**
   * 处理点击文章【更新】按钮事件
   * @param e 鼠标事件
   * @param newArticle 修改后的文章对象
   */
  const handleUpdate = (e: React.MouseEvent<HTMLElement>, newArticle: IArticle) => {
    e.preventDefault();
    if (!newArticle.uid) {
      delete newArticle.uid;
      delete newArticle.id;
      delete newArticle.createAt;
      delete newArticle.updateAt;
      apiV2
        .post('/article', newArticle)
        .then(res => {
          window.alert(res.data.msg);
          setSelectedArticle(undefined);
        })
        .catch(err => window.alert(err.response.data.msg));
    } else {
      apiV2
        .put(`/article?uid=${newArticle.uid}`, newArticle)
        .then(res => {
          window.alert(res.data.msg);
          setSelectedArticle(undefined);
        })
        .catch(err => window.alert(err.response.data.msg));
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
   * 处理文章列表 使其满足列表的格式要求
   * @param articleList 原生的文章列表
   * @returns 处理后的文章列表
   */
  const covertArticleList = (articleList: IArticleTable[]) => {
    return articleList.map((article) => {
      const newArticle = lodash.clone(article); // 浅拷贝一份 避免后续操作影响值
      /**
       * 对各项值进行转换
       */
      article.createAt = dayjs(article.createAt).format('YYYY-MM-DD');
      article.updateAt = dayjs(article.updateAt).format('YYYY-MM-DD');
      article.showCover = (
        <img
          src={article.cover}
          alt={article.title}
          style={{width:100,height:80,objectFit:'cover'}}
        />
      );
      article.showTags = (
        article.tags !== ''
          ? <span>{article.tags.split('|').map((t,i) => <Tag key={i}>{t}</Tag>)}</span>
          : ''
      );
      article.edit = (
        <span>
          <Button onClick={e => handleEdit(e, newArticle)}>编辑</Button>
          <Button onClick={e => handleDelete(e, newArticle)} danger>删除</Button>
        </span>
      );
      delete article.cover;
      delete article.tags;
      delete article.content;
      return article;
    });
  };

  /**
   * get the article lists.
   * @param offset offset to the start;
   * @param limit page size
   */
  const getArticleList = async (offset = 0, limit: number) => {
    await apiV2
      .get(`/articles?offset=${offset}&limit=${limit}&orderBy=createAt`)
      .then(res => {
        setArticleList(covertArticleList(res.data.data));
        // 判断是否已经是最后一页
        if (currentOffset + pageLimit >= res.data.totals) {
          setIsNextButtonDisable(true);
        } else {
          setIsNextButtonDisable(false);
        }
      })
      .catch(err => console.log(err));
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
      setIsPrevButtonDisable(true);
    } else {
      setIsPrevButtonDisable(false);
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
          { articleList ? <Table data={articleList} heads={heads} /> : <Spin /> }
        </div>
        <div className="prev-next">
          <Button onClick={handlePrev} disabled={isPrevButtonDisable}>Prev</Button>
          <Button onClick={handleNext} disabled={isNextButtonDisable}>Next</Button>
        </div>
      </TableContainer>
      <ArticleEditor
        article={selectedArticle}
        visible={Boolean(selectedArticle)}
        onSubmit={(e, newArticle) => handleUpdate(e, newArticle)}
        onClose={handleEditorClose}
      />
    </Article>
  );
}
