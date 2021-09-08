import React from 'react';

import { rootRouteItems } from '@/routes';
import { ViewportProvider } from '@/hooks';
import { RightNavi } from '../_partial';

import Background from './background';
import Gallery from './gallery';

export default function GalleryPage () :React.ReactElement {
  const [isRightNaviOpen, setIsRightNaviOpen] = React.useState(false);

  const cover = `
    https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/background/kayle-kaupanger.jpg
  `;

  const verse = {
    createAt: '2021-08-02',
    updateAt: '2021-02-02',
    id: 1,
    uid: '4646aeraedfladlfhadiofag',
    title: 'soso',
    author: 'yiming',
    content: [
      '纵潮望海阔',
      '一览似无余'
    ]
  };

  return (
    <ViewportProvider>
      <Background cover={cover} verse={verse} />
      <Gallery />
      <RightNavi
        isOpen={isRightNaviOpen}
        onClick={e => {e.preventDefault(); setIsRightNaviOpen(!isRightNaviOpen);}}
        menus={rootRouteItems}
      />
    </ViewportProvider>
  );
}