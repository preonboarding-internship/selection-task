const API_URL = {
  HOME: '/',
  SIGNUP: '/auth/signup',
  SIGNIN: '/auth/signin',
  TODO: '/todos',
  UPDATETODO: (id: number) => `todos/${id}`
}

export default API_URL