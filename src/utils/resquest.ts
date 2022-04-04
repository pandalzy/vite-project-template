import axios from "axios";
const service = axios.create({
  baseURL: "http://127.0.0.1:8080/",
  timeout: 1000,
});


service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers["Authorization"] = "Bearer " + getToken();
    // }
    return config;
  },
  error => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);


service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code >= 400) {
      // Message({
      //   message: res.message || "请求出错",
      //   type: "error",
      //   duration: 3 * 1000,
      // });
      return Promise.reject(new Error(res.message || "请求出错"));
    } else {
      return res;
    }
  },
  error => {
    console.log("err" + error); // for debug
    // Message({
    //   message: error.message,
    //   type: "error",
    //   duration: 5 * 1000,
    // });
    return Promise.reject(error);
  }
);

export default service;