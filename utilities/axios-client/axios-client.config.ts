import axios from 'axios';

const baseURL = typeof window !== 'undefined' ? `${window.location.hostname}/api` : '/api'
const headers = { 'Authorization': window?.localStorage.getItem('authorization') ?? '' }

const axiosClient = axios.create({
   baseURL,
   headers,
   timeout: 1e4,
   withCredentials: true,
   signal: new AbortController().signal,
})

export default axiosClient