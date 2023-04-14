import API_URL from "../constant/apiUrls";
import { IGetTodo } from "../interface/todo";
import { axiosInstance } from "./instance";

/** 투두 생성 */
export const CREATETODO = (data: object) => axiosInstance.post(API_URL.TODO, data)

/** 투두 가져오기 */
export const GETTODO = async () => {
  const data: IGetTodo[] = await axiosInstance.get(API_URL.TODO)
  return data
}

/** 투두 업데이트 */
export const UPDATETODO = (id: number) => axiosInstance.put(API_URL.UPDATETODO(id))

/** 투두 삭제 */
export const DELETETODO = (id: number) => axiosInstance.delete(API_URL.UPDATETODO(id))