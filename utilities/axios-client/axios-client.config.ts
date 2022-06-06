import axios from 'axios';

const axiosClient = axios.create({
   baseURL: 'https://atomlaptop.vercel.app/api/',
   timeout: 1e4,
   withCredentials: true,
   signal: new AbortController().signal,
})

export default axiosClient