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

interface IArticle extends IPost {
  cover: string,
  content: string,
  extension: string,
  excerpt: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any,
}

interface IPicture extends IPost {
  source: string,
  description: string,
  width: number,
  height: number,
  latitude: number,
  longitude: number,
  latitudeRef: string,
  longitudeRef: string,
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
