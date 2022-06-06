import axios from 'axios';

const axiosClient = axios.create({
   baseURL: `/api`,
   headers: { 'Authorization': window.localStorage.getItem('authorization') ?? '' },
   timeout: 1e4,
   withCredentials: true,
   signal: new AbortController().signal,
})

export default axiosClient