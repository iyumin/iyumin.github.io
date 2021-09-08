import { ILog } from './log';
import { IBase, IPost, IArticle, IPicture, IUser, IComment } from './post';
import { IRouteItem } from './route';

/**
 * 诗句、歌词、散文
 */
interface IVerse {
  createAt: string,
  updateAt: string,
  id: number,
  uid: string,
  title: string,
  author: string,
  content: string[],
}

export {
  /**
   * post
   */
  IBase, IPost, IArticle, IPicture, IUser, IComment,
  /**
   * log
   */
  ILog,
  /**
   * route item
   */
  IRouteItem,
  /**
   * poem, poetry
   */
  IVerse,
};