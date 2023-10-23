import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import styled from 'styled-components';
import { Upload as UploadIcon } from '@icon-park/react';
import COLOR_MAP from '@/styles/colors';

const Box = styled.div`
  position: relative;
  border-radius: 4px;
  background-color: ${COLOR_MAP.white4};
  min-height: 80px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${COLOR_MAP.primary};
  height: 100%;
  border-radius: 8px;
  z-index: 1;
`;

export interface UploadProps {
  url?: string;
  allowExtensions?: string[],
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
  const { url, onFinish, onFailed, allowExtensions } = props;
  const [status, setStatus] = React.useState(null);
  const [width, setWidth] = React.useState<number | string>(0);
  const [filename, setFilename] = React.useState(null);

  const ref = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const SUCCESS = '上传成功';
  const FAILED = '失败';

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
      setWidth(0);
      setStatus(null);
      setFilename(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0] as File;
    // console.log(file);
    const n = file?.name.split('.').pop();
    if (!allowExtensions?.includes(n)) {
      setWidth('100%');
      setFilename('不被允许的格式');
      setStatus(FAILED);
      return;
    }

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
        setStatus(SUCCESS);
        if (onFinish) {
          onFinish(resp.data.data);
          setFilename(resp.data.data.origin);
        }
      } else {
        setStatus(FAILED);
        if (onFailed) onFailed();
      }
    })();
  };

  const maskColor = () => {
    if (status === FAILED) return COLOR_MAP.red;
    if (status === SUCCESS) return COLOR_MAP.green;
    return COLOR_MAP.primary;
  };

  return (
    <Box className='component-upload' ref={ref} onClick={handleClick}>
      <Mask style={{width: width, backgroundColor: maskColor()}} />
      <input
        type='file'
        onChange={handleChange}
        style={{width: 1, height: 1}}
        ref={inputRef}
      />
      <div
        style={{zIndex: 2, color: COLOR_MAP.white, top: 16, position: 'absolute'}}
      >{ status || <UploadIcon theme="outline" size="24" fill="#333"/> }</div>
      <span style={{
        position: 'absolute',
        bottom: 8,
        zIndex: 2,
        color: COLOR_MAP.white,
      }}>{ filename && filename?.slice(0, 8) + '...' + filename?.split('.').pop() }</span>
    </Box>
  );
}
