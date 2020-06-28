import axios from '@/axios.js'

const api = {
  getCitys() {
    return axios.get('/api/meituan/city/cityList.json')
  },
  getProvince() {
    return axios.get('/api/meituan/city/province.json')
  },
  getHotCity() {
    return axios.get('/api/meituan/city/hot.json')
  },
  login(account, password) {
    return axios.get('/api/meituan/login', {
      params: {
        userName: account,
        password
      }
    })
  }
}

export default api