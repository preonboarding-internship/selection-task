import API_URL from "../constant/apiUrls"
import { axiosInstance } from "./instance"

/** 회원가입 */
export const SIGNUP = (data: object) => axiosInstance.post(API_URL.SIGNUP, data)

/** 로그인 */
export const SIGNIN = (data: object) => axiosInstance.post(API_URL.SIGNIN, data)