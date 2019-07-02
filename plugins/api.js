import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:3001/api/v1/' : '//digitalfilms.us:3001/api/v1/'
})

 export default api