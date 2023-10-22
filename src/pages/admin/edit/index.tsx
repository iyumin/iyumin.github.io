import React from 'react';
import styled from 'styled-components';
import marked from 'marked';
import WE from 'wangeditor';
import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom';

import { IPost } from '@/types';
import { Input, Button } from '@/components';
import { fetchPost, updatePost } from '@/apis';
import { BASE_URL } from '@/configs/environment';

const renderer = {
  image(href: string, title: string, text: string) :string {
    return `
      <div style="display:flex;justify-content:center;flex-wrap:wrap;">
        <img src="${href}" alt="${text || title}" style="width:80%;" />
        <div style="width:100%;text-align:center;color:#777777;">${text}</div>
      </div>
    `;
  }
};

const Frame = styled.div`
  display: flex;
  padding: 16px 0 0 0;
  .left {
    padding: 0 32px;
  }
  .right {
    padding: 0 32px 0 0;
    label {
      width: 36px;
      text-align: right;
    }
    .submit-cancel {
      margin-top: 32px;
      display: flex;
      justify-content: center;
      button {
        width: 90%;
        height: 32px;
      }
    }
  }
`;

const PostTitle = styled.div`
  padding: 0 0 8px 0;
  input {
    display: inline-block;
    width: 100%;
    margin: 0;
    height: 44px;
    font-weight: 600;
    font-size: 20px;
  }
`;

const PostEditor = styled.div`
  line-height: 1.5;
`;

const Photo = styled.div`
  width: 900px;
  height: 800px;
  display: flex;
  justify-content: center;
  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`;

const POST_TEMPLATE: IPost = {
  title: '',
  author: '',
  updateAt: dayjs().valueOf(),
  createAt: dayjs().valueOf(),
  content: '',
  cover: '',
  uid: '',
  id: 0,
  excerpt: '',
  tags: '',
  format: 'html',
  status: 'draft',
};

export default function Editor(): React.ReactElement {
  const [ post, setPost ] = React.useState<IPost>();
  const [ content, setContent ] = React.useState(null);
  const location = useLocation();
  const otherRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLDivElement>(null);

  const uid = location.pathname.split('/')[3];
  const typ = location.pathname.split('/')[2];

  React.useEffect(() => {
    if (post && post?.type === 'article') {
      marked.use({ renderer });
      const e = new WE('#article-editor');
      e.config.height = 500;
      e.config.onchange = setContent;
      e.create();
      e.txt.html(post?.content);
      return () => e.destroy();
    }
  }, [post]);

  React.useEffect(() => {
    (async() => {
      const data = await fetchPost(uid);
      if (data) setPost(data.post);
    })();
  }, []);

  const getKeyValue = () => {
    const data = Object.create({});
    Object.assign(data, {content});
    if (otherRef.current) {
      const inputs = otherRef.current.querySelectorAll('input');
      for (const i of inputs) {
        const name = i.dataset['name'];
        const value = i.value;
        Object.assign(data, {[name]: value});
      }
    }
    if (titleRef.current) {
      const input = titleRef.current.querySelector('input');
      Object.assign(data, {title: input.value});
    }
    return data;
  };

  const clickSubmit = () => {
    (async() => {
      const data = getKeyValue();
      const r = await updatePost(uid, data);
      if (r) window.alert('更新成功' + r);
      else window.alert('更新失败');
    })();
  };

  return (
    <Frame>
      <div className='left' ref={titleRef}>
        <PostTitle>
          <Input
            name='title'
            placeholder='请输入标题'
            defaultValue={post?.title}
          />
        </PostTitle>
        {
          typ === 'article'
            ? <PostEditor id="article-editor" />
            : <Photo><img src={BASE_URL + post?.url} alt={post?.title}/></Photo>
        }
      </div>
      <div className='right'>
        <div className='more-info' ref={otherRef}>
          <Input label='类型' data-name='type' defaultValue={post?.type} />
          { typ === 'article' && <Input label='封面' data-name='cover' defaultValue={post?.cover} /> }
          { typ === 'photo' && <Input label='源' data-name='url' defaultValue={post?.url} /> }
          <Input label='作者' data-name='author' defaultValue={post?.author} />
          <Input label='创建' data-name='createAt' defaultValue={post?.createAt} />
          <Input label='更新' data-name='updateAt' defaultValue={post?.updateAt} />
          <Input label='简介' data-name='excerpt' defaultValue={post?.excerpt} />
          <Input label='格式' data-name='format' defaultValue={post?.format} />
          <Input label='状态' data-name='status' defaultValue={post?.status} />
          <Input label='分类' data-name='category' defaultValue={post?.category} />
          <Input label='标签' data-name='tags' defaultValue={post?.tags} />
          { typ === 'photo' && <Input label='说明' data-name='description' defaultValue={post?.description} /> }
          { typ === 'photo' && <Input label='EXIF' data-name='exif' defaultValue={post?.exif} /> }
        </div>
        <div className='submit-cancel'>
          <Button onClick={clickSubmit} type='primary'>提交</Button>
        </div>
      </div>
    </Frame>
  );
}
