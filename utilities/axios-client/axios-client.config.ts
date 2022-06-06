import axios from 'axios';

const axiosClient = axios.create({
   baseURL: `${window.location.hostname}/api`,
   headers: { 'Authorization': window.localStorage.getItem('authorization') ?? '' },
   timeout: 1e4,
   withCredentials: true,
   signal: new AbortController().signal,
})

export default axiosClient