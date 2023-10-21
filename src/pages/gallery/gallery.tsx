import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { CalendarThirtyTwo, CrossRingTwo } from '@icon-park/react';
import api from '@/utils/axios';
import { IPost } from '@/types';
import { Masonry, IMasonryItem, Loading } from '@/components';
import { useDevice, useScroll } from '@/hooks';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  position: relative;
`;

const ImageMasonry = styled.div`
  margin: 48px 0;
`;

const Mask = styled.div``;
const MaskDesc = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .mask-desc-item {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    margin: 8px;
  }
  .i-icon {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }
`;

const maskStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255,249,247,1)',
  zIndex: 10,
  transition: 'all .3s ease-in-out',
  filter: 'opacity(98%)',
} as React.CSSProperties;

type PhotoItem = IMasonryItem & IPost;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const calculateoriginalSize = (item: PhotoItem, clientWidth: number, clientHeight: number) => {
  /**
   * 计算预览图最终状态
   * @param item
   * @param clientWidth 窗口宽度
   * @param clientHeight 窗口高度
   */
  // 原图比例
  const ratio: number = item.width / item.height;

  let finalHeight: number;
  // 最终的高度
  // 如果原图高度大于视窗高度的 90% 则将其裁剪
  const limitHeight = clientHeight * 0.8;
  if (item.height > limitHeight) {
    finalHeight = limitHeight;
  } else {
    finalHeight = item.height;
  }
  // 根据高度计算出最终的宽度
  let finalWidth = finalHeight * ratio;
  if (finalWidth > clientWidth) {
    finalWidth = clientWidth;
    finalHeight = clientWidth / ratio;
  }
  // 计算出最终需要偏移的量
  const finalTop = 50; //(clientHeight - finalHeight) / 2;
  // 最终左偏移量，需要减去瀑布流主体距离左边的宽度
  const finalLeft = (clientWidth - finalWidth) / 2;

  return {
    finalWidth,
    finalHeight,
    finalTop,
    finalLeft,
  };
};

export default function GalleryPage () :React.ReactElement {
  const [currentOffset, setCurrentOffset] = React.useState(0);
  const [imageList, setImageList] = React.useState<Array<PhotoItem>>([]);
  const [isMoreImage, setIsMoreImage] = React.useState(false);

  const [selectedItem, setSelectedItem] = React.useState<PhotoItem>();
  const [selectedItemIndex, setSelectedItemIndex] = React.useState<number>();
  const [maskDescToTop, setMaskDescToTop] = React.useState<number>(0);

  const { clientWidth, clientHeight, device } = useDevice();
  const { toBottom } = useScroll();

  const masonryRef: React.RefObject<HTMLDivElement> = React.useRef();

  const pageLimit = 12;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickPreview = (e: any, item: PhotoItem) => {
    /**
     * 处理点击图片预览事件
     */
    e.preventDefault();

    const current = masonryRef.current;
    // 点击选中的 item index
    const index = e.target.parentNode.dataset.index;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const oldItem: any = current !== undefined ? current.children[index] : '';
    
    const animationDelay = 300; // 300ms

    // 复制一份原有的图片
    const previewItem = oldItem.cloneNode(true);

    // 记录下原有的位置和长宽信息
    const oldWidth = oldItem.getBoundingClientRect().width;
    const oldHeight = oldItem.getBoundingClientRect().height;
    const oldTop = oldItem.getBoundingClientRect().top;
    const oldLeft = oldItem.getBoundingClientRect().left;

    // 计算最终的位置及长宽
    const {
      finalWidth,
      finalHeight,
      finalTop,
      finalLeft,
    } = calculateoriginalSize(item, clientWidth, clientHeight);

    // 将复制的图片，采用绝对布局
    previewItem.style.transition = `all ${animationDelay/1000}s ease-in-out`;
    previewItem.style.position = 'fixed';
    previewItem.style.boxShadow = '4px 4px 16px 8px rgba(0,0,0,0.35)';
    previewItem.style.zIndex = 999999;

    previewItem.style.width = oldWidth + 'px';
    previewItem.style.height = oldHeight + 'px';
    previewItem.style.left = oldLeft + 'px';
    previewItem.style.top = oldTop + 'px';
    
    oldItem.style.display = 'none';      // 隐藏原有图片
    current.append(previewItem);         // 样式设置好后，将其插入原有结构中

    setSelectedItem(item);                      // set item selected
    setSelectedItemIndex(index);                // set item index selected
    setMaskDescToTop(finalHeight + finalTop);   // set the mask description position to top;

    // 20ms later, 操作 dom 设置放大预览样式
    setTimeout(() => {
      previewItem.style.width = finalWidth + 'px';
      previewItem.style.height = finalHeight + 'px';
      previewItem.style.left = finalLeft + 'px';
      previewItem.style.top = finalTop + 'px';
    }, 20);

    // 点击预览图时，重新缩回小样
    previewItem.onclick = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      previewItem.style.width = oldWidth + 'px';
      previewItem.style.height = oldHeight + 'px';
      previewItem.style.left = oldLeft + 'px';
      previewItem.style.top = oldTop + 'px';
      // 动画效果结束后，删除预览图片，并回复原有图片显示
      setTimeout(() => {
        current.removeChild(previewItem);
        oldItem.style.display = 'block';
      }, animationDelay);

      setSelectedItemIndex(undefined);  // set item index selected undefined;
      setSelectedItem(undefined);       // set item selected undefined;
    };
  };

  // 获取图片
  const getImageList = (page: number, size = 12) => {
    api
      .get(`/posts?offset=${page}&limit=${size}&type=photo`)
      .then(res => {
        if (res.data.code === 1) {
          const limit = res.data.data.limit;
          const offset = res.data.data.offset;
          const totals = res.data.data.totals || 30;
          const items = res.data.data.posts;
          // setState: ImageList
          setImageList(imageList.concat(covertImageList(items)));
          // 判断是否还有下一页
          offset + limit > totals
            ? setIsMoreImage(false)
            : setIsMoreImage(true);
        }
      });
  };

  React.useEffect(() => {
    // 获取图片
    getImageList(currentOffset, pageLimit);
  }, []);

  React.useEffect(() => {
    if (isMoreImage && toBottom < 500) {
      // console.log('almost bottom');
      getImageList(currentOffset + pageLimit, pageLimit);
      setCurrentOffset(currentOffset + pageLimit);
    }
  }, [toBottom]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLockScroll = (e: any) => {
    if (selectedItemIndex) {
      e.preventDefault(selectedItemIndex);
    } else {
      // console.log(e);
    }
  };

  React.useEffect(() => {
    window.addEventListener('wheel', handleLockScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleLockScroll);
    };
  }, [selectedItemIndex]);

  return (
    <Container>
      <ImageMasonry>
        {
          imageList.length !== 0
            ? 
            <Masonry
              data={imageList as PhotoItem[]}
              cols={device === 'mobile' ? 2 : 3}
              colWidth={device === 'mobile' ? (clientWidth - 12)/2 : 320}
              gutter={device === 'mobile' ? 4 : 24}
              onPreview={handleClickPreview}
              ref={masonryRef}
              shadow
            />
            :
            <Loading />
        }
        <Mask style={selectedItemIndex && maskStyle}>
          <MaskDesc
            style={{
              visibility: selectedItemIndex ? 'visible' : 'hidden',
              position: 'absolute',
              top: maskDescToTop + 8,
              left: '50%',
              transform: 'translateX(-50%)',
              // transition: 'all .1s ease-in',
              flexWrap: device === 'mobile' ? 'wrap' : 'wrap',
            }}
          >
            {
              selectedItem
                ?
                <>
                  <div style={{width:'100%',textAlign:'center',}}>
                    <h3>{ selectedItem.title }</h3>
                  </div>
                  <span className="mask-desc-item">
                    <CalendarThirtyTwo theme="outline" size="20" fill="#333" strokeWidth={2}/>
                    <span style={{ margin: '0 8px'}}>
                      { dayjs(selectedItem.createAt).format('YYYY-MM-DD') }
                    </span>
                  </span>
                  <span className="mask-desc-item">
                    <CrossRingTwo theme="outline" size="20" fill="#333" strokeWidth={2}/>
                    <span style={{margin: '0 8px'}}>
                      {selectedItem.description || '还没有图片说明' }
                    </span>
                  </span>
                </>
                :
                ''
            }
          </MaskDesc>
        </Mask>
      </ImageMasonry>
      { isMoreImage && <Loading /> }
    </Container>
  );
}

// covert the raw image list to the masonry required.
const covertImageList = (imageList: Array<PhotoItem>) :Array<PhotoItem> => {
  return imageList.map((image: IPost, index: number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tmp: any = image;
    const source = 'http://localhost:5000' + image.url;
    tmp.key = image.uid;
    tmp.child = (
      <img
        src={source}
        data-index={index}
        alt={image.title}
        style={{width:'100%', height: '100%',}} />
    );
    const exif = JSON.parse(image.exif);
    tmp.width = exif.width;
    tmp.height = exif.height;
    return tmp;
  });
};
