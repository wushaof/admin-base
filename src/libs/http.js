import axios from 'axios'
import {httpUrl} from './env';
axios.defaults.baseURL = httpUrl;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

export default {
  post (url, data, callback) {
    return axios({
      method: 'post',
      url,
      data,
      timeout: 10000,
      // headers: {
      //   'X-Requested-With': 'XMLHttpRequest',
      //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      // }
    }).then((res) => {
      callback(res.data)
    }).catch((err) => {
      callback(err)
    })
  },
  get (url, params, callback) {
    return axios({
      method: 'get',
      url,
      params,
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(res => {
      callback(res.data)
    }).catch(err => {
      callback(err)
    })
  }
}
