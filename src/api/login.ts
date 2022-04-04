import request from "@/utils/request";

export function loginApi(data: Object) {
  return request({
    url: "/api/data",
    method: "post",
    data: data
  })
}
