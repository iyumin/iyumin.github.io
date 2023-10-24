import api from '@/utils/axios';
import { BASE_URL } from '@/configs/environment';
import { IPost } from '@/types';

type ReturnType = Promise<{
  posts?: IPost[];
  amount?: number;
  offset?: number;
  limit?: number;
  post?: IPost;
}> | null;

export interface LoginData {
  username: string;
  password: string;
}

export async function login(data: LoginData) {
  const url = BASE_URL + '/token';
  const resp = await api.post(url, data);
  if (resp.data.code === 0) return resp.data.data;
  return;
}

export async function fetchPosts(offset: number, limit: number) :ReturnType {
  const url = BASE_URL + '/post/list';
  const params = { offset, limit };
  const resp = await api.get(url, {params});
  if (resp.data.code === 0) return resp.data.data;
  return;
}

export async function fetchArticles(offset: number, limit: number) :ReturnType {
  const url = BASE_URL + '/post/list';
  const params = { offset, limit, type: 'article' };
  const resp = await api.get(url, {params});
  if (resp.data.code === 0) return resp.data.data;
  return;
}

export async function fetchPhotos(offset: number, limit: number) :ReturnType {
  const url = BASE_URL + '/post/list';
  const params = { offset, limit, type: 'photo' };
  const resp = await api.get(url, {params});
  if (resp.data.code === 0) return resp.data.data;
  return;
}

export async function deletePost(uid: string) :Promise<boolean> {
  const url = BASE_URL + '/p?uid=' + uid;
  const resp = await api.delete(url);
  if (resp.data.code === 0) return true;
  return false;
}

export async function updatePost(uid: string, data: IPost) :ReturnType {
  const url = BASE_URL + '/p?uid=' + uid;
  const resp = await api.put(url, data);
  if (resp.data.code === 0) return resp.data.msg;
  return;
}

export async function addPost(data: IPost) :ReturnType {
  const url = BASE_URL + '/p';
  const resp = await api.post(url, data);
  if (resp.data.code === 0) return resp.data.msg;
  return;
}

export async function fetchPost(uid: string) :Promise<IPost> {
  const url = BASE_URL + '/p?uid=' + uid;
  const resp = await api.get(url);
  if (resp.data.code === 0) return resp.data.data.post;
  return;
}

export async function fetchLogs(start: number, end: number) :ReturnType {
  const url = BASE_URL + `/logs?start=${start}&end=${end}`;
  const resp = await api.get(url);
  if (resp.data.code === 0) return resp.data.data;
  return;
}
