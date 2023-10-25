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
  const [cover, setCover] = React.useState<string>();

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
      uid: 'daadsgasdfafa',
      title: 'soso',
      author: 'yiming',
      content: [
        '须知少时凌云志',
        '曾许人间第一流'
      ]
    },
    {
      createAt: '2023-10-25',
      updateAt: '2023-10-25',
      id: 1,
      uid: '4646aeraedfladlfdasfhadiofag',
      title: 'soso',
      author: 'yiming',
      content: [
        '醉后不知天在水',
        '满床清梦压星河'
      ]
    },
    {
      createAt: '2023-10-25',
      updateAt: '2023-10-25',
      id: 1,
      uid: '4646aeraedflad3asdfla34asfhadiofag',
      title: 'soso',
      author: 'yiming',
      content: [
        '久雨寒蝉少',
        '空山落叶深'
      ]
    },
    {
      createAt: '2023-10-25',
      updateAt: '2023-10-25',
      id: 1,
      uid: '4646aeraedflad3asdfla34asfhadiofag',
      title: 'soso',
      author: 'yiming',
      content: [
        '梦里寻欢终是客',
        '客醒五更空愁眠'
      ]
    },
    {
      createAt: '2023-10-25',
      updateAt: '2023-10-25',
      id: 1,
      uid: '4646aeraedflad3asdfla34asfhadiofag',
      title: 'soso',
      author: 'yiming',
      content: [
        '氤氲旧时江上',
        '曾是照影惊鸿'
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