import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { useParams } from 'react-router-dom';
import { IPost } from '@/types';
import { Loading } from '@/components';
import { fetchPost } from '@/apis';
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
  const [article, setArticle] = React.useState<IPost>();
  const [isRightNaviOpen, setIsRightNaviOpen] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params: any = useParams();

  React.useEffect(() => {
    const { uid } = params;
    (async() => {
      const data = await fetchPost(uid);
      setArticle(data);
    })();
  }, []);

  return (
    <Container>
      { article ? renderContent(article) : <Loading /> }
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

const renderContent = (article: IPost) => {
  return (
    <div className='article-content'>
      <Header className="article-page-header">
        <h2>{ article.title }</h2>
        <div className="author">
          { article.author }
        </div>
        <div className="date">
          { dayjs.unix(Number(String(article.createAt).slice(0,10))).format('YYYY年M月D日') }
        </div>
      </Header>
      <Content>
        <div dangerouslySetInnerHTML={{__html: article.content}}></div>
      </Content>
    </div>
  );
};
