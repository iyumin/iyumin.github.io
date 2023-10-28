import React from 'react';
import styled from 'styled-components';
import { Upload } from '@/components/upload';
import { BASE_URL } from '@/configs';
import COLOR_MAP from '@/styles/colors';
import { Input } from '@/components/input';
import { useParams } from 'react-router-dom';
import { fetchPost } from '@/apis/posts';
import { IPost } from '@/types';
import dayjs from 'dayjs';
import { Select, Option } from '@/components/select';
import { Button } from '@/components/button';
import DP from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const F = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const UploadArea = styled.div`
  width: 100%;
  height: 220px;
  .inner {
    background-color: ${COLOR_MAP.white5};
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }
`;

const FormArea = styled.div`
  margin-top: 16px;
  width: 100%;
`;

const SubmitArea = styled.div`
  margin-top: 20px;
  button {
    width: 68px;
  }
`;

const Item = styled.div`
  width: 100%;
  margin: 8px 0;
  .item-inner {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    .item-label {
      width: 68px;
      text-align: justify;
      text-align-last: justify;
      margin-right: 16px;
    }
    .item-input {
      width: 220px;
      input {
        width: 100%;
      }
      .react-datepicker-wrapper {
        width: 214px;
        margin: 4px 0;
        input {
          height: 20px;
          border: 1px solid ${COLOR_MAP.white5};
        }
      }
    }
  }
`;

const reducer = (state: IPost, action: {type: string, payload: IPost}) => {
  return {...state, ...action.payload }
}

const default_post: IPost = {
  title: '',
  author: '',
  updateAt: dayjs().unix(),
  createAt: dayjs().unix(),
  content: '',
  uid: '',
  id: 0,
  excerpt: '',
  tags: '',
  format: 'default',
  status: 'draft',
  type: 'photo',
  category: 'default',
};

export default function PhotoEdit() {
  const [state, dispatch] = React.useReducer(reducer, default_post)
  const params = useParams();

  const uid = params.uid;
  const ref = React.useRef(null);

  const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.dataset['name'];
    const value = e.target.value;
    dispatch({type: '', payload: { [name]: value }});
  }

  const setPhotoValue = (key: string, value: string | number) => {
    dispatch({type: '', payload: { [key]: value }});
  }

  const handleSubmit = () => {
    console.log(state);
  }

  React.useEffect(() => {
    (async() => {
      const resp = await fetchPost(uid);
      if (typeof resp !== 'string') {
        dispatch({type: '', payload: resp.data.post});
      } else {
        window.alert(resp);
      }
    })
  }, [uid]);

  return (
    <F>
      <UploadArea>
        <div className='inner'>
          <Upload
            url={BASE_URL + '/upload'}
            onFinish={p => console.log(p)}
            allowExtensions={['jpg', 'jpeg', 'png', 'gif', 'webp']}
          />
        </div>
      </UploadArea>
      <FormArea>
        <Item>
          <div className='item-inner'>
            <label className='item-label'>标题</label>
            <span className='item-input'>
              <Input
                data-name='title'
                value={state.title}
                onChange={setValue}
              />
            </span>
          </div>
        </Item>
        <Item>
          <div className='item-inner'>
            <label className='item-label'>作者</label>
            <span className='item-input'>
              <Input
                data-name='author'
                value={state.author}
                onChange={setValue}
              />
            </span>
          </div>
        </Item>

        <Item>
          <div className='item-inner'>
            <label className='item-label'>发布状态</label>
            <span className='item-input'>
              <Select onChange={v => setPhotoValue('status', v)} defaultValue={state?.status}>
                <Option value='publish' name='已发表' />
                <Option value='draft' name='草稿' />
                <Option value='private' name='隐私' />
              </Select>
            </span>
          </div>
        </Item>

        <Item>
          <div className='item-inner'>
            <label className='item-label'>图片格式</label>
            <span className='item-input'>
              <Select onChange={v => setPhotoValue('format', v)} defaultValue={state?.status}>
                <Option value=' ' name='Unkonwn' />
                <Option value='jpg' name='JPG' />
                <Option value='png' name='PNG' />
                <Option value='jpeg' name='JPEG' />
              </Select>
            </span>
          </div>
        </Item>
        
        <Item>
          <div className='item-inner'>
            <label className='item-label'>简介</label>
            <span className='item-input'>
              <Input
                data-name='excerpt'
                value={state.excerpt}
                onChange={setValue}
              />
            </span>
          </div>
        </Item>

        <Item>
          <div className='item-inner'>
            <label className='item-label'>创建时间</label>
            <span className='item-input'>
              <DP
                selected={state?.createAt && dayjs.unix(state?.createAt).toDate()}
                onChange={d => setPhotoValue('createAt', dayjs(d).unix())}
                dateFormat={'yyyy-MM-dd'}
              />
            </span>
          </div>
        </Item>

        <Item>
          <div className='item-inner'>
            <label className='item-label'>更新时间</label>
            <span className='item-input'>
              <DP
                selected={state?.updateAt && dayjs.unix(state?.updateAt).toDate()}
                onChange={d => setPhotoValue('updateAt', dayjs(d).unix())}
                dateFormat={'yyyy-MM-dd'}
              />
            </span>
          </div>
        </Item>

        <Item>
          <div className='item-inner'>
            <label className='item-label'>分类</label>
            <span className='item-input'>
              <Input
                data-name='category'
                value={state.category}
                onChange={setValue}
              />
            </span>
          </div>
        </Item>

        <Item>
          <div className='item-inner'>
            <label className='item-label'>标签</label>
            <span className='item-input'>
              <Input
                data-name='tags'
                value={state.tags}
                onChange={setValue}
              />
            </span>
          </div>
        </Item>

        <Item>
          <div className='item-inner'>
            <label className='item-label'>EXIF信息</label>
            <span className='item-input'>
              <Input
                data-name='exif'
                value={state.exif}
                onChange={setValue}
              />
            </span>
          </div>
        </Item>

        <Item>
          <div className='item-inner'>
            <label className='item-label'>更多说明</label>
            <span className='item-input'>
              <Input
                data-name='description'
                value={state.description}
                onChange={setValue}
              />
            </span>
          </div>
        </Item>
      </FormArea>
      <SubmitArea>
        <Button onClick={handleSubmit} type='primary'>提交</Button>
        <Button danger>取消</Button>
      </SubmitArea>
    </F>
  )
}
