import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import dayjs from 'dayjs';

import { apiV2 } from '@/utils';
import { IArticle } from '@/types';
import COLOR_MAP from '@/styles/colors';
import { Loading } from '@/components';
import { RightNavi } from '../_partial';
import { rootRouteItems } from '@/routes';

const Container = styled.div`
  padding: 48px 0;
`;

const ArticleList = styled.div`
  margin: 0 auto;
  max-width: 820px;
`;

const ArticleItem = styled.div`
  width: 100%;
  margin: 16px 0;
  border-radius: 4px;
  position: relative;
  transition: all .3s ease-in-out;
  display: flex;
`;

const Cover = styled.div`
  width: 44%;
  min-height: 160px;
  max-height: 300px;
  transition: all .3s ease-in-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border-radius: 4px 0 0 4px;
  }
  &:hover {
    width: 42%;
  }
`;

const Info = styled.div`
  position: relative;
  width: 56%;
  background-color: #fff;
  color: ${COLOR_MAP.dark};
  border-radius: 0 4px 4px 0;
  flex-grow: 1;
  h3.info-item {
    cursor: pointer;
    &:hover {
      color: ${COLOR_MAP.blue};
    }
  }
  .info-author-date {
    position: absolute;
    left: 16px;
    bottom: 16px;
    font-size: 12px;
    color: ${COLOR_MAP.dark};
    .info-author,.info-date {
      display: inline-block;
      margin-right: 16px;
    }
    .info-date {
      color: ${COLOR_MAP.white6};
    }
  }
`;

const LoadMore = styled.div`
  max-width: 820px;
  margin: 0 auto;
  padding: 16px 0;
  text-align: center;
  background-color: #fff;
  cursor: pointer;
  border-radius: 4px;
`;

export default function ArticlesPage () :React.ReactElement {
  const [isRightNaviOpen, setIsRightNaviOpen] = React.useState(false);
  const [articleList, setArticleList] = React.useState<IArticle[]>();
  const [offset, setOffset] = React.useState(0);
  
  const pageLimit = 9;
  const history = useHistory();

  const handleMore = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    apiV2
      .get(`/articles?offset=${offset+pageLimit}&limit=${pageLimit}`)
      .then(res => {
        setArticleList(articleList.concat(res.data.data));
        setOffset(offset+pageLimit);
      })
      .catch(err => window.alert(err.response.data.msg));
  };

  const handleClickArticle = (e: React.MouseEvent<HTMLElement>, a: IArticle) => {
    e.preventDefault();
    history.push(`/article/${a.uid}`);
  };

  const renderArticleItem = (a: IArticle) => (
    <ArticleItem>
      <Cover onClick={e => handleClickArticle(e, a)}>
        <img src={a.cover} alt={a.title} />
      </Cover>
      <Info>
        <div style={{margin:16}}>
          <h3 className="info-item" onClick={e => handleClickArticle(e, a)}>{ a.title }</h3>
          <div className="info-item" style={{color: COLOR_MAP.white7}}>{ a.excerpt }</div>
          <div className="info-author-date info-item">
            <div className="info-author">{ a.author }</div>
            <div className="info-date">{ dayjs(a.updateAt).format('YYYY年M月D日') }</div>
          </div>
        </div>
      </Info>
    </ArticleItem>
  );

  React.useEffect(() => {
    apiV2
      .get(`/articles?offset=${offset}&limit=${pageLimit}&order=desc&orderBy=updateAt`)
      .then(res => setArticleList(res.data.data))
      .catch(err => window.alert(err.response.data.msg));
  }, []);

  return (
    <Container>
      <ArticleList>
        {
          articleList
            ? articleList.map(renderArticleItem)
            : <Loading />
        }
      </ArticleList>
      <LoadMore role="button" onClick={handleMore}>Load More</LoadMore>
      <RightNavi
        isOpen={isRightNaviOpen}
        onClick={e => {e.preventDefault(); setIsRightNaviOpen(!isRightNaviOpen);}}
        menus={rootRouteItems}
      />
    </Container>
  );
}
