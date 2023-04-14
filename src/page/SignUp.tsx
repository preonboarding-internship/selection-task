import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Input from '../component/common/Input'
import Title from '../component/common/Title'
import Button from '../component/common/Button'
import COLORS from '../constant/root'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../constant/routes'
import { SIGNUP } from '../api/auth'
import { getCookie } from '../util/cookie'
import { IAuth, IAuthValid, IAuthValidError } from '../interface/auth'

const SignUp = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState<IAuth>({
    email: '',
    password: '',
  })
  const [isValid, setIsValid] = useState<IAuthValid>({
    isEmail: false,
    isPassword: false,
  })
  const [errorMessage, setErrorMessage] = useState<IAuthValidError>({
    emailError: '',
    passwordError: '',
  })
  const [disabled, setDisabled] = useState(false)
  const accessToken = getCookie('accessToken')

  useEffect(() => {
    if (accessToken) {
      navigate(ROUTES.TODO)
      alert('로그인 상태입니다!')
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const current = e.target.value

    switch (e.target.type) {
      case 'email':
        const regex = /\S+@\S+\.\S+/

        if (!regex.test(current)) {
          setErrorMessage({
            ...errorMessage,
            emailError: '이메일 형식을 확인해주세요.',
          })
          setIsValid({ ...isValid, isEmail: false })
        } else {
          setErrorMessage({
            ...errorMessage,
            emailError: '',
          })
          setIsValid({ ...isValid, isEmail: true })
        }
        setForm({ ...form, email: current })
        break
      case 'password':
        if (current.length < 8) {
          setErrorMessage({
            ...errorMessage,
            passwordError: '8자 이상 입력해주세요.',
          })
          setIsValid({ ...isValid, isPassword: false })
        } else {
          setErrorMessage({
            ...errorMessage,
            passwordError: '',
          })
          setIsValid({ ...isValid, isPassword: true })
        }
        setForm({ ...form, password: current })
        break
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setDisabled(true)
      await SIGNUP({
        email: form.email,
        password: form.password,
      })
      alert('회원가입이 성공하였습니다!\n로그인을 시도해주세요.')
      navigate(ROUTES.SIGNIN)
    } finally {
      setDisabled(false)
    }
  }

  return (
    <SignUpStyle>
      <Title
        titleType='h1'
        title='회원가입'
        margin='0 0 50px'
      />
      <FormStyle onSubmit={handleSubmit}>
        <Input
          dataTestid='email-input'
          type='email'
          placeholder='이메일'
          item={form.email}
          errorMessage={errorMessage.emailError}
          onChange={handleChange}
        />
        <Input
          dataTestid='password-input'
          type='password'
          placeholder='비밀번호'
          item={form.password}
          errorMessage={errorMessage.passwordError}
          onChange={handleChange}
        />
        <Button
          type='submit'
          dataTestid='signup-button'
          text='회원가입'
          isDisabled={disabled}
        />
      </FormStyle>
      <Button
        buttonType='transparent'
        text='홈으로'
        onClick={() => navigate(ROUTES.HOME)}
      />
    </SignUpStyle>
  )
}

export default SignUp

const SignUpStyle = styled.div`
  > button {
    width: 100%;
    background-color: ${COLORS.skyblue};
    margin-top: 50px;
  }
`

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .inValid {
    color: ${COLORS.red};
    font-size: 14px;
  }
`
