import request from "@/utils/request";

export function loginApi(data: Object) {
  return request({
    url: "/api/user/login",
    method: "post",
    data: data
  })
}


export function userInfoApi() {
  return request({
    url: "/api/user/info",
    method: "get",
  })
}