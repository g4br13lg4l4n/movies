import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:3001/api/v1/' : 'http://206.189.169.235:3001/api/v1/'
})

 export default api