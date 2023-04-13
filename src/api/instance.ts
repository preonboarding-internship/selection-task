import axios from "axios"
import { getCookie, removeCookie, setCookie } from "../util/cookie"
const API_BASE_URL = process.env.REACT_APP_API_KEY

const axiosApi = (url: string) => {
  const instance = axios.create({
    baseURL: url, headers: { 'Content-Type': 'application/json' }
  })
  instance.defaults.timeout = 3000

  instance.interceptors.response.use(
    (response) => {
      const responseToken = response.data.access_token
      responseToken ? setCookie('accessToken', responseToken) : removeCookie('accessToken')
      return response.data
    },
    (error) => {
      console.log(error);
      alert(error.response.data.message);
      return Promise.reject(error)
    }
  )

  instance.interceptors.request.use(
    (config) => {
      const token = getCookie('accessToken')
      if (token) config.headers['Authorization'] = `Bearer ${token}`
      return config
    },
    (error) => {
      console.log(error);
      return Promise.reject(error)
    }
  )

  return instance
}

export const axiosInstance = axiosApi(API_BASE_URL!)