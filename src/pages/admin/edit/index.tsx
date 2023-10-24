/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from 'styled-components';
import marked from 'marked';
import WE from 'wangeditor';
import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom';

import { IPost } from '@/types';
import { Button, Input } from '@/components';
import Upload, { UploadData } from '@/components/inputs/upload';
import { Select, Option } from '@/components/inputs/select';
import { fetchPost, updatePost, addPost } from '@/apis';
import { BASE_URL } from '@/configs/environment';

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

export default function Editor(): React.ReactElement {
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
  // update or add
  const mode = location.pathname.split('/')[1];
  const typ = location.pathname.split('/')[2];
  const uid = location.pathname.split('/')[3];

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
        <Button onClick={clickSubmit}>提交</Button>
      </div>
    </Frame>
  );
}

export interface MoreInfoProps {
  state: IPost;
  setValue(e: React.ChangeEvent<HTMLInputElement>): void;
  setPostValue(key: string, v: string): void;
}

interface PreviewProps {
  state: IPost;
  onFinish(data: UploadData): void;
}

function Preview({state, onFinish}: PreviewProps) {
  const u = (
    <EditItem name='preview' label='上传图片'>
      <Upload
        url={BASE_URL + '/upload'}
        onFinish={onFinish}
        allowExtensions={['jpg', 'png', 'gif', 'jpeg']}
      />
    </EditItem>
  );

  const p = (
    <EditItem name='preview' label='预览'>
      <img
        alt={state?.title}
        src={BASE_URL + state?.url?.replace('static/', 'static/thumb-')}
        style={{width: '100%', height: '100%'}}
      />
    </EditItem>
  );

  if (state.url) {
    return <>{u}{p}</>;
  } else {
    return u;
  }
}

function MoreInfo(props: MoreInfoProps) {
  const { state, setValue, setPostValue } = props;

  return (
    <div className="more-info">

      <EditItem name="category" label='分类'>
        <Select onChange={v => setPostValue('category', v)} defaultValue={state?.category}>
          <Option value='fiction' name='科幻' />
          <Option value='dairy' name='日志' />
          <Option value='life' name='生活' />
          <Option value='travel' name='旅行' />
        </Select>
      </EditItem>

      <EditItem name="author" label="作者">
        <Input
          data-name="author"
          defaultValue={state?.author}
          onChange={setValue}
        />
      </EditItem>

      <EditItem name="createAt" label="创建">
        <Input
          data-name="createAt"
          defaultValue={state?.createAt}
          onChange={setValue}
        />
      </EditItem>

      <EditItem name='updateAt' label="更新">
        <Input
          data-name="updateAt"
          defaultValue={state?.updateAt}
          onChange={setValue}
        />
      </EditItem>
      
      <EditItem name='exceprt' label="简介">
        <Input
          data-name="excerpt"
          defaultValue={state?.excerpt}
          onChange={setValue}
        />
      </EditItem>
      
      <EditItem label="格式">
        <Input 
          data-name="format"
          defaultValue={state?.format}
          onChange={setValue}
        />
      </EditItem>

      <EditItem label="状态">
        <Input
          data-name="status"
          defaultValue={state?.status}
          onChange={setValue}
        />
      </EditItem>

      <EditItem label="标签">
        <Input
          data-name="tags"
          defaultValue={state?.tags}
          onChange={setValue}
        />
      </EditItem>

      <EditItem label="说明">
        <Input
          data-name="description"
          defaultValue={state?.description}
          onChange={setValue}
        />
      </EditItem>

      <EditItem label="EXIF">
        <Input
          data-name="exif"
          defaultValue={state?.exif}
          onChange={setValue}
        />
      </EditItem>

      <EditItem name="type" label='类型'>
        <Select onChange={v => setPostValue('type', v)} defaultValue={state?.type}>
          <Option value='article' name='文章' />
          <Option value='photo' name='照片' />
        </Select>
      </EditItem>
    </div>
  );
}

interface EditItemProps {
  name?: string;
  label?: string;
  children: React.ReactNode;
}

const EI = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  .edit-item-label {
    margin: 0 8px 0 0;
    width: 32px;
    text-align: right;
  }
  .edit-item-children {
    flex-grow: 1;
  }
`;

const EditItem = (props: EditItemProps) => {
  const { name, label, children } = props;
  return (
    <EI className="edit-item" data-name={name}>
      <div className="edit-item-label">{label}</div>
      <div className="edit-item-children">{children}</div>
    </EI>
  );
};
