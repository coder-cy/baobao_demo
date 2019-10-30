import axios from 'axios';

// 创建axios实例
const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.104:9090/tutu'
})

const postMethod = (path, param) => {
  return axiosInstance.post(path, param).then(result => {
    return Promise.resolve(result);
  }).catch(err => {
    return Promise.reject(err);
  });
};



// request拦截器
axiosInstance.interceptors.request.use(config => {
  // Do something before request is sent

  //debugger
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// respone拦截器
axiosInstance.interceptors.response.use(
  response => {
      return response.data;
  },
  error => {
    return Promise.reject(error)
  }
)

export const validateAccount = param => {
  return postMethod("/validateAccount", param);
}

export const validateName = param => {
  return postMethod("/validateName", param);
}
