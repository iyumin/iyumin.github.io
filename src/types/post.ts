interface IBase {
  id: number,
  uid: string,
}

type IPost = Partial<{
  //
  createAt: number;
  publishAt: number;
  updateAt: number;
  type: string;
  title: string;
  author: string;
  content: string;
  excerpt: string;
  cover: string;
  status: string;
  tags: string;
  category: string;
  format: string;
  url: string;
  exif: string;
  description: string;
}> & IBase;

export interface IExif {
  width?: number;
  height?: number;
}

interface IArticle extends IPost {
  
}

interface IPicture extends IPost {
  
}

interface IUser extends IBase {
  name: string,
  password: string,
}

interface IComment extends IBase {
  content: string,
  user: string,
}

export {
  IBase,
  IPost,
  IArticle,
  IPicture,
  IUser,
  IComment,
};
