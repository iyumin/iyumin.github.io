import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { useParams } from 'react-router';
import { IArticle } from '@/types';
import api from '@/utils/axios';
import { Loading } from '@/components';
import { RightNavi, Comment } from '../_partial';
import { rootRouteItems } from '@/routes';
import COLOR_MAP from '@/styles/colors';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 16px;
  background-color: #fff;
`;

const Header = styled.div`
  width: 100%;
  height: fit-content;
  padding: 16px 0;
  h2,.date,.author {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 16px;
  }
  .author {
    padding: 16px 0 0 16px;
    color: ${COLOR_MAP.white7};
    font-size: 0.9rem;
  }
  .date {
    padding: 16px 16px 0 16px;
    color: ${COLOR_MAP.white7};
    font-size: 0.9rem;
  }
`;

const Content = styled.div`
  line-height: 1.8;
  padding: 0 16px 32px 16px;
`;

export default function ArticlePage () :React.ReactElement {
  const [article, setArticle] = React.useState<IArticle>();
  const [isRightNaviOpen, setIsRightNaviOpen] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params: any = useParams();

  React.useEffect(() => {
    const { uid } = params;
    api
      .get(`/p?uid=${uid}`)
      .then(res => setArticle(res.data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      {
        article
          ?
          <>
            <Header className="article-page-header">
              <h2>{ article.title }</h2>
              <div className="author">
                { article.author }
              </div>
              <div className="date">
                { dayjs(article.createAt).format('YYYY年M月D日') }
              </div>
            </Header>
            <Content>
              <div dangerouslySetInnerHTML={{__html: article.content}}></div>
            </Content>
          </>
          :
          <Loading />
      }
      <div style={{marginTop:64,maxWidth:1000,padding:16}}>
        <Comment />
      </div>
      <RightNavi
        menus={rootRouteItems}
        isOpen={isRightNaviOpen}
        onClick={e => {e.preventDefault(); setIsRightNaviOpen(!isRightNaviOpen);}}
      />
    </Container>
  );
}
