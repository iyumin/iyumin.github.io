import React from 'react';
import { IPost } from '@/types';
import { BASE_URL } from '@/configs';
import styled from 'styled-components';
import Upload, { UploadData } from '@/components/inputs/upload';
import { EditItem } from './item';


const Pre = styled.div`
  height: 150px;
  width: 100%;
  align-items: center;
  display: flex;
`;

export interface PreviewProps {
  state: IPost;
  onFinish?(data: UploadData): void;
}

export function Preview({state, onFinish}: PreviewProps) {
  const [success, setSuccess] = React.useState(false);

  const handleFinish = (data: UploadData) => {
    if (data) setSuccess(true);
    if (onFinish) onFinish(data);
  };

  return (
    <EditItem name='preview' label='上传图片'>
      <Pre className='preview-inner'>
        {
          !success && !state?.url
          &&
          <Upload
            url={BASE_URL + '/upload'}
            onFinish={handleFinish}
            allowExtensions={['jpg', 'png', 'gif', 'jpeg']}
          />
        }
        {
          state?.url
          &&
          <img
            alt={state?.title}
            src={BASE_URL + state.url.replace('static/', 'static/thumb-')}
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        }
      </Pre>
    </EditItem>
  );
}