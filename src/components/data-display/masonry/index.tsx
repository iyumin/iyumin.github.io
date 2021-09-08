import Masonry from './masonry';

interface IMasonryItem {
  width: number,
  height: number,
  key: string | number,
  child: React.ReactNode,
}

interface MasonryProps {
  cols?: number, // columns
  colWidth?: number, // column width
  gutter?: number, // gutter between column,
  shadow?: boolean,
  data: IMasonryItem[],
  onPreview?: (e: React.MouseEvent<HTMLElement>, item: IMasonryItem) => void,
  ref: React.RefObject<HTMLDivElement>,
}

export {
  Masonry,
  IMasonryItem,
  MasonryProps,
};