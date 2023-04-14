export interface IAuth {
  email: string
  password: string
}

export interface IAuthValid {
  isEmail: boolean
  isPassword: boolean
}

export interface IAuthValidError {
  emailError: string
  passwordError: string
}