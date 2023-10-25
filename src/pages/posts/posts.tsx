import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';

import { IPost } from '@/types';
import COLOR_MAP from '@/styles/colors';
import { Loading } from '@/components';
import { RightNavi } from '../_partial';
import { rootRouteItems } from '@/routes';
import { BASE_URL } from '@/configs';
import { fetchArticles } from '@/apis';

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
  &:hover {
    .cover {
      width: 46%;
    }
  }
`;

const Cover = styled.div`
  width: 44%;
  min-height: 160px;
  max-height: 300px;
  transition: width .2s ease-in-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border-radius: 4px 0 0 4px;
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

function transformList(origin: IPost[]) :IPost[] {
  const arr = [];
  for (let i=0; i<origin?.length; i++) {
    const n = origin[i];
    n.url = BASE_URL + n.url.replace('static/', 'static/thumb-');
    arr.push(n);
  }
  return arr;
}

export default function ArticlesPage () :React.ReactElement {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [list, setList] = React.useState<IPost[]>();
  const [offset, setOffset] = React.useState(0);
  const [hasMore, setHasMore] = React.useState(true);
  
  const pageLimit = 5;
  const history = useHistory();

  const handleClickMore = async () => {
    const data = await fetchArticles(offset+pageLimit, pageLimit);
    if (!data) {
      setHasMore(false);
      return;
    }
    setList(list.concat(transformList(data.posts)));
    setOffset(offset+pageLimit);
  };

  const handleClickArticle = (a: IPost) => {
    history.push(`/article/${a.uid}`);
  };

  const renderItem = (a: IPost) => (
    <ArticleItem key={a.uid}>
      <Cover onClick={() => handleClickArticle(a)} className='cover'>
        <img src={a.url} alt={a.title} />
      </Cover>
      <Info>
        <div style={{margin:16}}>
          <h3 className="info-item" onClick={() => handleClickArticle(a)}>
            { a.title }
          </h3>
          <div className="info-item" style={{color: COLOR_MAP.white7}}>
            { a.excerpt }
          </div>
          <div className="info-author-date info-item">
            <div className="info-author">{ a.author }</div>
            <div className="info-date">
              { dayjs.unix(a.updateAt).format('YYYY年M月D日') }
            </div>
          </div>
        </div>
      </Info>
    </ArticleItem>
  );

  // 组件加载时获取文章列表
  React.useEffect(() => {
    (async() => {
      const data = await fetchArticles(offset, pageLimit);
      setList(transformList(data?.posts));
      if (data?.amount < pageLimit) setHasMore(false);
    })();
  }, []);

  return (
    <Container>
      <ArticleList>
        { list ? list.map(renderItem) : <Loading /> }
      </ArticleList>
      {
        hasMore &&
        <LoadMore role="button" onClick={handleClickMore}>Load More</LoadMore>
      }
      <RightNavi
        isOpen={isNavOpen}
        onClick={() => setIsNavOpen(!isNavOpen)}
        menus={rootRouteItems}
      />
    </Container>
  );
}
