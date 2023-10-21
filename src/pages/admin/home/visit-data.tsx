import React from 'react';
import styled from 'styled-components';
import * as echarts from 'echarts';
import dayjs from 'dayjs';
import '../_configs/echarts-theme/shine.js';

import api from '@/utils/axios';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  align-items: center;
  padding: 28px 0 0 28px;
  border-radius: 8px;
`;

interface IProps {
  width?: number,
  height?: number,
}

export default function VisitData (props: IProps) :React.ReactElement {
  const { width = 400, height = 300, } = props;

  const ref = React.useRef();

  const today = dayjs();
  const oneDayAgo = today.subtract(1, 'day');
  const twoDaysAgo = today.subtract(2, 'day');
  const threeDaysAgo = today.subtract(3, 'day');
  const fourDaysAgo = today.subtract(4, 'day');
  const fiveDaysAgo = today.subtract(5, 'day');
  const sixDaysAgo = today.subtract(6, 'day');

  const formatDate = (date: dayjs.Dayjs) => date.format('YYYY-MM-DD');
  const dateQueries = [
    formatDate(sixDaysAgo),
    formatDate(fiveDaysAgo),
    formatDate(fourDaysAgo),
    formatDate(threeDaysAgo),
    formatDate(twoDaysAgo),
    formatDate(oneDayAgo),
    formatDate(today),
  ];

  React.useEffect(() => {
    api
      .get(`/logs/visit-data?dates=${JSON.stringify(dateQueries)}`)
      .then(res => {
        const rates = res.data.data.map((log: {date: string, totals: number}) => log.totals);

        const options = {
          renderer: 'svg',
          title: {
            text: '一周访问量',
            subtext: '访问后端API的次数',
            left: 'center',
            right: 'center',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
            },
          },
          xAxis: {
            type: 'category',
            // 表格下方的日期显示只需要显示到月份和日期
            data: dateQueries.map(d => dayjs(d).format('MM-DD')),
          },
          yAxis: {
            type: 'value',
          },
          series: [{
            data: rates,
            type: 'line',
            smooth: true,
          }]
        };

        const rateChart = echarts.init(ref.current, 'shine');

        rateChart.setOption(options);
      })
      .catch(err => window.alert(err.response.data.msg));
  }, []);

  const styles = {
    display: 'block',
    userSelect: 'none',
    padding: 0,
    margin: '0 auto',
    borderWidth: 0,
  } as React.CSSProperties;

  return (
    <Container style={{width:width}}>
      <canvas id="ip-chart" width={width} height={height} ref={ref} style={styles}></canvas>
    </Container>
  );
}
