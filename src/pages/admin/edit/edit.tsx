/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from 'styled-components';
import marked from 'marked';
import WE from 'wangeditor';
import dayjs from 'dayjs';
import { useLocation, useHistory } from 'react-router-dom';
import { ArrowLeft } from '@icon-park/react';

import { IPost } from '@/types';
import { Button, Input } from '@/components';
import Upload from '@/components/inputs/upload';
import { fetchPost, updatePost, addPost } from '@/apis';
import { BASE_URL } from '@/configs';
import { MoreInfo } from './info';
import COLOR_MAP from '@/styles/colors';
import { EditItem } from './item';

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
  height: 100vh;
  justify-content: center;
  .inner {
    max-width: 1440px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  background-color: ${COLOR_MAP.white1};
  align-items: center;
  margin-bottom: 8px;
  .back-icon {
    margin-left: 24px;
  }
  .title {
    flex-grow: 1;
    text-align: center;
  }
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  background-color: ${COLOR_MAP.white};
  .left {
    flex-grow: 1;
    margin: 8px 24px 0 16px;
    min-width: 800px;
    .content {
      display: flex;
      justify-content: center;
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
  .right {
    padding-right: 16px;
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

const Left = styled.div`
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

const Right = styled.div``;

const PostEditor = styled.div`
  line-height: 1.5;
`;

interface Action {
  type: string;
  payload: Partial<IPost>;
}

export function Editor(): React.ReactElement {
  const location = useLocation();
  const history = useHistory();
  // update or add
  const mode = location.pathname.split('/')[1];
  const typ = location.pathname.split('/')[2];
  const uid = location.pathname.split('/')[3];

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
    format: 'default',
    status: 'draft',
    type: typ,
    category: 'default',
  };

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

  const onUpCoverFinish = (data: any) => {
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
      weditor.current.config.height = 700;
      weditor.current.config.onchange = (t: string) => setPostValue('content', t);
      weditor.current.create();
      weditor.current.txt.html(state.content);
    }
    return () => weditor.current?.destroy();
  }, []);

  return (
    <Frame className='edit-page'>
      <div className='inner'>
        <Header className='header'>
          <div className='back-icon' onClick={() => history.go(-1)}>
            <ArrowLeft theme="outline" size="28" fill="#333"/>
          </div>
          <div className='title'>
            <h1 style={{color: COLOR_MAP.dark2}}>
              { mode === 'update' && '上传' }
              { mode === 'add' && '新增' }
              { typ === 'article' && '文章' }
              { typ === 'photo' && '照片' }
            </h1>
          </div>
        </Header>
        <Main className='main'>
          <Left className="left">
            <div className='post-title'>
              <Input
                data-name="title"
                placeholder="请输入标题"
                defaultValue={state?.title}
                onChange={setInputValue}
              />
            </div>
            <div className='content'>
              { typ === 'article' && <PostEditor id="article-editor" /> }
              { typ === 'photo' && <PhotoUpload setPostValue={setPostValue} /> }
            </div>
          </Left>
          <Right className="right">
            { typ === 'article' && <CoverUpload onFinish={onUpCoverFinish} /> }
            <MoreInfo
              state={state}
              setValue={setInputValue}
              setPostValue={setPostValue}
            />
            <div className='submit-cancel'>
              <Button onClick={clickSubmit} type='primary'>提交</Button>
              <Button onClick={() => {
                if (confirm('确定返回？')) history.go(-1);
              }} danger>取消</Button>
            </div>
          </Right>
        </Main>
      </div>
    </Frame>
  );
}

const PhotoUpload = ({setPostValue}: {setPostValue: any}) => {
  return (
    <div style={{height: 600, width: 900}}>
      <Upload
        allowExtensions={['jpg', 'jpeg']}
        url={BASE_URL + '/upload'}
        onFinish={(d: any) => {
          setPostValue('url', d.url);
          const width = d.width;
          const height = d.height;
          setPostValue('exif', JSON.stringify({width, height}));
          setPostValue('format', d.ext);
        }}
      />
    </div>
  );
};

const CoverUpload = ({onFinish}: {onFinish: any}) => {
  return (
    <EditItem label='封面' style={{width: 230}}>
      <Upload
        onFinish={onFinish}
        url={BASE_URL + '/upload'}
        allowExtensions={['jpg', 'png']}
      />
    </EditItem>
  );
};
