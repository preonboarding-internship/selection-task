import axios from "axios"

const API_BASE_URL = process.env.REACT_APP_API_KEY

const axiosApi = (url: string) => {
  const instance = axios.create({
    baseURL: url, headers: { 'Content-Type': 'application/json' }
  })
  instance.defaults.timeout = 3000

  instance.interceptors.response.use(
    (response) => {
      return response.data
    },
    (error) => {
      console.log(error);
      return Promise.reject(error)
    }
  )

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken')
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