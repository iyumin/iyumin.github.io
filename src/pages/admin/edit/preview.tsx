import React from 'react';
import { IPost } from '@/types';
import { BASE_URL } from '@/configs/environment';
import Upload, { UploadData } from '@/components/inputs/upload';
import { EditItem } from './item';


export interface PreviewProps {
  state: IPost;
  onFinish(data: UploadData): void;
}

export function Preview({state, onFinish}: PreviewProps) {
  return (
    <>
      <EditItem name='preview' label='上传图片'>
        <Upload
          url={BASE_URL + '/upload'}
          onFinish={onFinish}
          allowExtensions={['jpg', 'png', 'gif', 'jpeg']}
        />
      </EditItem>
      <EditItem
        name='preview'
        label='预览'
        style={{height: 200, width:300, overflow: 'hidden'}}
      >
        {
          state?.url
          &&
          <img
            alt={state?.title}
            src={BASE_URL + state.url.replace('static/', 'static/thumb-')}
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        }
      </EditItem>
    </>
  );
}