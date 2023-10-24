/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from 'styled-components';
import marked from 'marked';
import WE from 'wangeditor';
import dayjs from 'dayjs';
import { useLocation, useHistory } from 'react-router-dom';

import { IPost } from '@/types';
import { Button, Input } from '@/components';
import { fetchPost, updatePost, addPost } from '@/apis';
import { BASE_URL } from '@/configs/environment';
import { MoreInfo } from './info';
import { Preview } from './preview';

const renderer = {
  image(href: string, title: string, text: string): string {
    return `
      <div style="display:flex;justify-content:center;flex-wrap:wrap;">
        <img src="${href}" alt="${text || title}" style="width:80%;" />
        <div style="width:100%;text-align:center;color:#777777;">${text}</div>
      </div>
    `;
  },
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

const DEFAULT_POST: IPost = {
  title: '',
  author: '',
  updateAt: dayjs().valueOf(),
  createAt: dayjs().valueOf(),
  content: '',
  uid: '',
  id: 0,
  excerpt: '',
  tags: '',
  format: 'html',
  status: 'draft',
};

interface Action {
  type: string;
  payload: Partial<IPost>;
}

export function Editor(): React.ReactElement {
  marked.use({ renderer });
  const weditor = React.useRef<WE>(null);

  const reducer = (state: IPost, action: Action) => {
    return { ...state, ...action.payload };
  };

  const [state, dispatch] = React.useReducer(reducer, DEFAULT_POST);

  const setPostValue = (key: string, value: any) => {
    dispatch({ type: '', payload: { [key]: value } });
  };

  const setInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.dataset['name'];
    const value = e.target.value;
    dispatch({ type: '', payload: { [name]: value } });
  };

  const location = useLocation();
  const history = useHistory();
  // update or add
  const mode = location.pathname.split('/')[1];
  const typ = location.pathname.split('/')[2];
  const uid = location.pathname.split('/')[3];

  const clickSubmit = () => {
    (async () => {
      const data = state;
      if (mode === 'update') {
        const r = await updatePost(uid, data);
        if (r) window.alert('更新成功' + r);
        else window.alert('更新失败');
      } else if (mode === 'add') {
        const r = await addPost(data);
        if (r) window.alert('添加成功');
        else window.alert('新增失败');
      }
    })();
    // console.log(state);
  };

  const onUploadFinish = (data: any) => {
    setPostValue('url', data.url);
  };

  React.useEffect(() => {
    if (mode === 'update') {
      (async () => {
        const data: IPost = await fetchPost(uid);
        if (data) {
          dispatch({ type: '', payload: data });
          weditor.current?.txt.html(data.content);
        }
      })();
    }
  }, []);

  React.useEffect(() => {
    if (document.querySelector('#article-editor')) {
      weditor.current = new WE('#article-editor');
      weditor.current.config.height = 500;
      weditor.current.config.onchange = (t: string) => setPostValue('content', t);
      weditor.current.create();
      weditor.current.txt.html(state.content);
    }
    return () => weditor.current?.destroy();
  }, []);

  return (
    <Frame>
      <div className="left">
        <PostTitle>
          <Input
            data-name="title"
            placeholder="请输入标题"
            defaultValue={state?.title}
            onChange={setInputValue}
          />
        </PostTitle>
        { typ === 'article' && <PostEditor id="article-editor" /> }
        {
          typ === 'photo' && 
          <Photo>
            <img
              src={BASE_URL + (state?.url)}
              alt={state?.title} />
          </Photo>
        }
      </div>
      <div className="right" style={{width: 300}}>
        <Preview onFinish={onUploadFinish} state={state} />
        <MoreInfo state={state} setValue={setInputValue} setPostValue={setPostValue} />
        <div className='submit-cancel'>
          <Button onClick={clickSubmit} type='primary'>提交</Button>
          <Button onClick={() => {
            if (confirm('确定返回？')) history.go(-1);
          }} danger>取消</Button>
        </div>
      </div>
    </Frame>
  );
}

