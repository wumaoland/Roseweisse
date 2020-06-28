import axios from 'axios'

axios.defaults.baseURL = "https://open.duyiedu.com"
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: '854300920_1570790168419'
  }
  return config
}, function (error) {
  console.log('错误！信息如下：' + error)
})

export default axios