import { userInfoApi } from "@/api/login";
import { store } from "@/store";
import { defineStore } from "pinia";

interface User {
  username: string;
  name: string;
  token?: string
}
export const useUserStore = defineStore('users', {
  state: (): User => ({
    username: "",
    name: "",
    token: undefined,
  }),
  actions: {
    async login(payload: object) {
      // const res = await loginApi(payload);
      // console.log(res);
      // this.token = res.data.token;
      this.token = "123";
    },
    async userInfo() {
      const res = await userInfoApi();
      console.log(res);
      this.username = res.data.user.username;
      this.name = res.data.user.name;
    }
  }
})

export function useUserStoreWithOut() {
  return useUserStore(store);
}