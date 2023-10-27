import api from "@/utils/axios";
import { IUser } from "@/types";
import { USERS_URL, USER_URL } from "./_url";
import { Response } from "@/types";

interface UserParams {
  username?: string;
  nickname?: string;
}

interface UsersData {
  amount: number;
  users: IUser[];
}

export async function fetchUsers(params?: UserParams) :Response<UsersData> {
  const resp = await api.get(USERS_URL, {params});
  if (resp.data.code === 0) return resp.data;
  return resp.data.msg;
}

export async function updateUser(uid: string,data: IUser) :Response {
  const resp = await api.put(USER_URL, data, { params: { uid } });
  if (resp.data.code === 0) return resp.data;
  return resp.data.msg;
}

export async function addUser(data: IUser) :Response {
  const resp = await api.post(USER_URL, data);
  if (resp.data.code === 0) return resp.data;
  return resp.data.msg;
}
