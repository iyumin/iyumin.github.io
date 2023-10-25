import React from 'react';

import { rootRouteItems } from '@/routes';
import { ViewportProvider } from '@/hooks';
import { RightNavi } from '../_partial';
import { BASE_URL } from '@/configs';
import { fetchCovers } from '@/apis';
import { random_int } from '@/utils';

import Background from './background';
import Gallery from './gallery';

export default function GalleryPage () :React.ReactElement {
  const [isRightNaviOpen, setIsRightNaviOpen] = React.useState(false);
  const [cover, setCover] = React.useState();

  const verses = [
    {
      createAt: '2021-08-02',
      updateAt: '2023-10-25',
      id: 1,
      uid: '4646aeraedfladlfhadiofag',
      title: 'soso',
      author: 'yiming',
      content: [
        '来自星辰',
        '归于星辰'
      ]
    },
    {
      createAt: '2023-10-25',
      updateAt: '2023-10-25',
      id: 1,
      uid: '4646aeraedfladlfhadiofag',
      title: 'soso',
      author: 'yiming',
      content: [
        '须知少时凌云志',
        '曾许人间第一流'
      ]
    }
  ];

  React.useEffect(() => {
    (async() => {
      const data = await fetchCovers();
      if (data) {
        const amount = data.amount;
        const idx = random_int(0, amount);
        setCover(data.posts[idx].url);
      }
    })();
  }, []);

  return (
    <ViewportProvider>
      <Background
        cover={BASE_URL + cover}
        verse={verses[random_int(0, verses.length)]}
      />
      <Gallery />
      <RightNavi
        isOpen={isRightNaviOpen}
        onClick={e => {e.preventDefault(); setIsRightNaviOpen(!isRightNaviOpen);}}
        menus={rootRouteItems}
      />
    </ViewportProvider>
  );
}