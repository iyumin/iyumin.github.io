import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import styled from 'styled-components';

const Box = styled.div`
  position: relative;
  border-width: 1px;
  border-style: dashed;
  border-color: '#c1c2c3';
  border-radius: 8px;
  background-color: #ddd;
  min-height: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(45,137,46,1);
  height: 100%;
  border-radius: 8px;
  z-index: 1;
`;

export interface UploadProps {
  url?: string;
  onChange?(file: File): void;
  onFinish?(data: UploadData): void;
  onFailed?(): void;
}

export type UploadData = Promise<{
  filename: string;
  origin: string;
  url: string;
}>;

export default function Upload(props: UploadProps) :React.ReactElement {
  const { url, onFinish, onFailed } = props;
  const [status, setStatus] = React.useState(null);
  const [width, setWidth] = React.useState(0);

  const ref = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    const formdata = new FormData();
    formdata.append('file', file);
    (async() => {
      const config: AxiosRequestConfig = {
        method: 'post',
        data: formdata,
        url: url,
        headers: {
          'content-type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        onUploadProgress(progressEvent) {
          const per = Number((progressEvent.loaded / progressEvent.total).toFixed(1));
          if (ref.current) {
            setWidth(ref.current.offsetWidth * per);
          }
        },
      };
      const resp = await axios(config);
      if (resp.data.code === 0) {
        setStatus('success');
        if (onFinish) onFinish(resp.data.data);
      } else {
        setStatus('failed');
        if (onFailed) onFailed();
      }
    })();
  };

  return (
    <Box className='component-upload' ref={ref} onClick={handleClick}>
      <Mask style={{width: width}} />
      <input
        type='file'
        onChange={handleChange}
        style={{width: 1, height: 1}}
        ref={inputRef}
      />
      <div style={{zIndex: 2}}>{ status || '点击上传' }</div>
    </Box>
  );
}
