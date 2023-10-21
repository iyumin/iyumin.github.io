import api from '@/utils/axios';
import { BASE_URL } from '@/configs/environment';

export async function fetchArticles(offset: number, limit: number) {
  const url = BASE_URL + '/posts';
  const params = { offset, limit, type: 'article' };
  const resp = await api.get(url, {params});
  if (resp.data.code === 0) return resp.data.data;
  return;
}

export async function deletePost(uid: string) {
  const url = BASE_URL + '/p?uid=' + uid;
  const resp = await api.delete(url);
  if (resp.data.code === 0) return resp.data.data;
  return;
}

export async function updatePost(uid: string, data: any) {
  const url = BASE_URL + '/p?uid=' + uid;
  const resp = await api.put(url, data);
  if (resp.data.code === 0) return resp.data.data;
  return;
}

export async function addPost(data: any) {
  const url = BASE_URL + '/p';
  const resp = await api.post(url, data);
  if (resp.data.code === 0) return resp.data.data;
  return;
}

export async function fetchPost(uid: any) {
  const url = BASE_URL + '/p?uid=' + uid;
  const resp = await api.delete(url);
  if (resp.data.code === 0) return resp.data.data;
  return;
}
