import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { apiV2 } from '@/utils';
import { Table, ITableHead, Loading, Input, Button } from '@/components';
import { ILog } from '@/types';
import COLOR_MAP from '@/styles/colors';

import { Header } from '../_partial/admin-container-layout';

const Container = styled.div`
  padding-bottom: 64px;
`;

const DatePicker = styled.div`
  display: flex;
  align-items: center;
  input { width: 100px !important; flex-grow: 0; }
`;

interface IProps {
  datetime: string,
}

interface ILogTable extends Omit<ILog, 'method' | 'ip'> {
  method: React.ReactNode,
  ip: React.ReactNode,
}

const _covertLogList = (logList: ILogTable[]) => {
  return logList.map(log => {
    delete log.id;
    delete log.uid;

    /**
     * 不同的请求方法，绘制不同的字体颜色
     */
    let fontColor = COLOR_MAP.dark;
    switch (log.method) {
    case 'GET':
      fontColor = COLOR_MAP.green;
      break;
    case 'POST':
      fontColor = COLOR_MAP.orange;
      break;
    case 'PUT':
      fontColor = COLOR_MAP.blue;
      break;
    case 'DELETE':
      fontColor = COLOR_MAP.red;
      break;
    case 'OPTIONS':
      fontColor = COLOR_MAP.cyan;
      break;
    default:
      fontColor = COLOR_MAP.dark;
    }
    log.method = <span style={{color:fontColor,fontSize:'0.8rem',}}>{log.method}</span>;

    /**
     * 重新绘制 ip 项，使其跳转到 ip 查询页面
     */
    log.ip = <a href={`https://ip.tool.chinaz.com/${log.ip}`}>{log.ip}</a>;

    return log;
  });
};

export default function LogViewer (props: IProps) :React.ReactElement {
  const { datetime = dayjs().format('YYYY-MM-DD') } = props;

  const [logDate, setLogDate] = React.useState(datetime);
  const [logList, setLogList] = React.useState(null);

  const tableHeads: ITableHead[] = [
    // { field: 'id', name: '日期', },
    // { field: 'uid', name: 'UID', },
    { field: 'datetime', name: '日期', },
    { field: 'ip', name: '访问IP', },
    { field: 'method', name: '方法', },
    { field: 'url', name: '访问页面', },
    { field: 'status', name: '状态码', },
    { field: 'spent', name: '耗时', },
    { field: 'message', name: '消息', },
    { field: 'length', name: '响应长度', },
  ];

  /**
   * get the log of the date given
   * @param d date of log
   */
  const getLogList = async (d: string) => {
    setLogList(null);
    await apiV2
      .get(`/logs?datetime=${d}`)
      .then(res => setLogList(res.data.data))
      .catch(err => window.alert(err.response.data.msg));
  };

  /**
   * handle input key down event
   * @param e keyboard event
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      getLogList(logDate);
    }
  };

  /**
   * get the log list when component did mount
   */
  React.useEffect(() => {getLogList(datetime);}, []);

  return (
    <Container className="admin-log-viewer-container">
      <Header>
        <Header.Title>Log Viewer</Header.Title>
      </Header>
      <div>
        <DatePicker>
          <Input label="选择日期" value={logDate} onChange={e => setLogDate(e.target.value)} onKeyDown={handleKeyDown} />
          <Button onClick={e => {e.preventDefault(); getLogList(logDate);}}>确定</Button>
        </DatePicker>
        { logList ? <Table data={_covertLogList(logList)} heads={tableHeads} /> : <Loading /> }
      </div>
    </Container>
  );
}
