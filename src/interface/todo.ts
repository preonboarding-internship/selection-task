export interface ICreateTodo {
  id: number,
  todo: string,
  isCompleted: boolean,
  userId: number
}

export interface IGetTodo {
  id: number,
  todo: string,
  isCompleted: boolean,
  userId: number
}