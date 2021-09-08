import React from 'react';
import styled from 'styled-components';
import marked from 'marked';
import WE from 'wangeditor';

import { IArticle } from '@/types';
import { Dialog, Button, Input, } from '@/components';
import renderer from './marked-plugin';

export interface EditorProps {
  /**
   * 文章对象
   */
  article: IArticle,
  /**
   * 编辑器是否可以
   */
  visible: boolean,
  /**
   * handle [submit] button
   */
  onSubmit: (e: React.MouseEvent<HTMLElement>, article: IArticle) => void,
  /**
   * 处理右上角【x】关闭按钮
   */
  onClose: React.MouseEventHandler<HTMLElement>
}

const ArticleContent = styled.div`
  padding: 16px 32px;
  line-height: 1.5;
  height: 655px;
  width: 900px;
`;

const ArticleInfo = styled.div`
  width: 300px;
  padding: 16px 32px 0 0;
  .article-item {
    label { width: 40px; }
  }
`;

export default function Editor (props: EditorProps) :React.ReactElement {
  const {
    article,
    visible,
    onSubmit,
    onClose,
  } = props;

  /**
   * 文章编辑器的各项值
   */
  const [uid, setUid] = React.useState<string>();
  const [id, setId] = React.useState<number>();
  const [title, setTitle] = React.useState<string>();
  const [author, setAuthor] = React.useState<string>();
  const [createAt, setCreateAt] = React.useState<string>();
  const [updateAt, setUpdateAt] = React.useState<string>();
  const [content, setContent] = React.useState<string>();
  const [cover, setCover] = React.useState<string>();
  const [excerpt, setExcerpt] = React.useState<string>();
  const [tags, setTags] = React.useState<string>();
  const [extension, setExtension] = React.useState<string>();
  const [publish, setPublish] = React.useState<string>();

  /**
   * 清理所有存在的状态
   */
  const clearAllStates = () => {
    setUid(undefined);
    setId(undefined);
    setTitle(undefined);
    setAuthor(undefined);
    setCreateAt(undefined);

    setUpdateAt(undefined);
    setContent(undefined);
    setCover(undefined);
    setExcerpt(undefined);
    setTags(undefined);
    setExtension(undefined);

    setPublish(undefined);
  };

  /**
   * 处理点击【提交】按钮事件
   * @param e 鼠标事件
   */
  const handleSubmit = (e: React.MouseEvent<HTMLElement>, a: IArticle) => {
    e.preventDefault();
    const form = {
      uid: uid || a.uid,
      id: id || a.id,
      title: title || a.title,
      author: author || a.author,
      createAt: createAt || a.createAt,
      updateAt: updateAt || a.updateAt,
      content: content || a.content,
      cover: cover || a.cover,
      excerpt: excerpt || a.excerpt,
      tags: tags || a.tags,
      extension: extension || a.extension,
      publish: publish || a.publish,
    };
    onSubmit(e, form);
    clearAllStates();
  };

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    clearAllStates();
    onClose(e);
  };

  const renderArticleInfo = (a: IArticle) => {
    return (
      <ArticleInfo>
        <div className="article-item">
          <Input label="UID" value={uid} onChange={e => setUid(e.target.value)} defaultValue={a.uid} />
        </div>
        <div className="article-item">
          <Input label="ID" value={id} onChange={e => setId(Number(e.target.value))} defaultValue={a.id} />
        </div>
        <div className="article-item">
          <Input label="标题" value={title} onChange={e => setTitle(e.target.value)} defaultValue={a.title} />
        </div>
        <div className="article-item">
          <Input label="作者" value={author} onChange={e => setAuthor(e.target.value)} defaultValue={a.author} />
        </div>
        <div className="article-item">
          <Input label="创建" value={createAt} onChange={e => setCreateAt(e.target.value)} defaultValue={a.createAt} />
        </div>
        <div className="article-item">
          <Input label="更新" value={updateAt} onChange={e => setUpdateAt(e.target.value)} defaultValue={a.updateAt} />
        </div>
        <div className="article-item">
          <Input label="封面" value={cover} onChange={e => setCover(e.target.value)} defaultValue={a.cover} />
        </div>
        <div className="article-item">
          <Input label="简介" value={excerpt} onChange={e => setExcerpt(e.target.value)} defaultValue={a.excerpt} />
        </div>
        <div className="article-item">
          <Input label="标签" value={tags} onChange={e => setTags(e.target.value)} defaultValue={a.tags} />
        </div>
        <div className="article-item" style={{margin:'8px 0'}}>
          <label style={{marginRight:16}}>格式</label>
          <select value={extension} onChange={e => setExtension(e.target.value)} defaultValue={a.extension}>
            <option value="html">HTML</option>
            <option value="text">纯文本</option>
            <option value="markdown">Markdown</option>
          </select>
        </div>
        <div className="article-item" style={{margin:'8px 0'}}>
          <label style={{marginRight:16}}>发布</label>
          <select value={publish} onChange={e => setPublish(e.target.value)} defaultValue={a.publish}>
            <option value="public">公开</option>
            <option value="private">隐藏</option>
            <option value="draft">草稿</option>
          </select>
        </div>
        <div style={{textAlign:'center',marginTop:24,}}>
          <Button onClick={e => handleSubmit(e, a)}>
            { a.uid ? '更新' : '新增' }
          </Button>
          <Button type="light" onClick={onClose}>取消</Button>
        </div>
      </ArticleInfo>
    );
  };

  React.useEffect(() => {
    marked.use({ renderer });

    let editor: WE = null;

    editor = new WE('#article-editor');
    editor.config.onchange = (newHtml: string) => setContent(newHtml);
    editor.config.height = 580;
    editor.create();

    // 判断内容的格式进行相应处理
    if (article) {
      console.log(article);
      const { extension, content } = article;
      switch (extension) {
      case 'markdown':
        editor.txt.html(marked(content));
        break;
      case 'html':
        editor.txt.html(content);
        break;
      default:
        editor.txt.html(content);
      }
    }

    return () => editor.destroy();
  }, [article]);

  return (
    <Dialog
      width={1200}
      height={700}
      title="文件编辑器"
      visible={visible}
      onCancel={handleClose}
      animation="slide-top-down"
    >
      <div style={{display:'flex',flexWrap:'nowrap',}}>
        <ArticleContent id="article-editor" />
        { article && renderArticleInfo(article) }
      </div>
    </Dialog>
  );
}
