import axios from 'axios';
import qs from 'qs';

const instance = axios.create();
// instance.defaults.baseURL = 'https://h5.yxy.h5no2.com';
instance.defaults.baseURL = 'http://127.0.0.1:8888';
instance.defaults.headers['Content-Type'] = 'multipart/form-data';
// instance.interceptors.request.use(config => {
//     // 给请求头加上Authorization,authJWT的字段,值为token
//     config.headers['Content-Type'] = 'multipart/form-data'
//     return config
// })

instance.defaults.transformRequest = (data, headers) => {
  const contentType = headers['Content-Type'];
  if (contentType === 'application/x-www-form-urlencoded') {
    console.log({ data });
    const newData = qs.stringify(data); // 传递参数格式
    console.log({ newData });
    return newData;
  }
  return data;
};

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    // 请求失败统一返回
    return Promise.reject(err);
  }
);

export default instance;
