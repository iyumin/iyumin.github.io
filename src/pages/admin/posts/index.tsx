import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button, Spin } from '@/components';
import { IPost } from '@/types';
import { fetchPosts } from '@/apis';

import { Header } from '../_partial/layout';
import { PostTable } from './table';

const Article = styled.div`
  .options {
    display: flex;
    align-items: center;
  }
`;

const TableContainer = styled.div`
  margin-top: 16px;
  width: 90%;
  .table {
    text-align: center;
  }
  .prev-next {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 16px 0;
  }
`;

export default function AdminArticlePage(): React.ReactElement {
  const PAGE_LIMIT = 6;
  const history = useHistory();
  const [posts, setPosts] = React.useState<IPost[]>(null);
  const [offset, setOffset] = React.useState(0);
  const [hasPrev, setHasPrev] = React.useState(false);
  const [hasNext, setHasNext] = React.useState(true);

  const clickAdd = () => {
    history.push('/add/article/0');
    return;
  };

  const clickPrev = () => {
    setPosts(null);
    setOffset(offset - PAGE_LIMIT);
  };

  const clickNext = () => {
    setPosts(null);
    setOffset(offset + PAGE_LIMIT);
  };

  const editTableRow = (p: IPost) => {
    history.push(`/update/${p.type}/${p.uid}`);
  };

  const getPosts = async (offset = 0, limit: number) => {
    const data = await fetchPosts(offset, limit);
    if (data) {
      if (offset <= 0) setHasPrev(false);
      else setHasPrev(true);

      if (data.amount < limit) setHasNext(false);
      else setHasNext(true);

      setPosts(data.posts);
    }
  };

  React.useEffect(() => {
    getPosts(offset, PAGE_LIMIT);
  }, [offset]);

  return (
    <Article>
      <Header>
        <Header.Title>文章管理</Header.Title>
        <Header.Add>
          <Button onClick={clickAdd}>新增</Button>
        </Header.Add>
      </Header>
      <TableContainer>
        <div className="table">
          { posts ? <PostTable posts={posts} onEdit={editTableRow} /> : <Spin /> }
        </div>
        <div className="prev-next">
          <Button onClick={clickPrev} disabled={!hasPrev}>Prev</Button>
          <Button onClick={clickNext} disabled={!hasNext}>Next</Button>
        </div>
      </TableContainer>
    </Article>
  );
}
