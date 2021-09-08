interface IBase {
  createAt: string,
  updateAt: string,
  id: number,
  uid: string,
}

interface IPost extends IBase {
  //
  title: string,
  author: string,
  publish: string,
  tags: string,
}

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
