import api from "@/utils/axios";
import { BASE_URL } from "@/configs";
import { IUser } from "@/types";


export async function updateUser(uid: string,data: IUser) {
  const url = BASE_URL + '/user?uid=' + uid;
  const resp = await api.put(url, data);
  if (resp.data.code === 0) return true;
  return;
}

export async function addUser(data: IUser) {
  const url = BASE_URL + '/user';
  const resp = await api.post(url, data);
  if (resp.data.code === 0) return true;
  return;
}
