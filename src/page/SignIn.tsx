import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Title from '../component/common/Title'
import { FormStyle } from './SignUp'
import Input from '../component/common/Input'
import Button from '../component/common/Button'
import { useNavigate } from 'react-router-dom'
import COLORS from '../constant/root'
import { ROUTES } from '../constant/routes'
import { SIGNIN } from '../api/auth'
import { getCookie } from '../util/cookie'
import { IAuth, IAuthValid, IAuthValidError } from '../interface/auth'

const SignIn = () => {
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
  const [disabled, setDisabled] = useState(true)
  const accessToken = getCookie('accessToken')

  useEffect(() => {
    if (accessToken) {
      navigate(ROUTES.TODO)
      alert('로그인 상태입니다!')
    }
    if (isValid.isEmail && isValid.isPassword) {
      setDisabled(false)
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
          setDisabled(true)
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
          setDisabled(true)
        } else {
          setErrorMessage({
            ...errorMessage,
            passwordError: '',
          })
          setIsValid({ ...isValid, isPassword: true })
          setDisabled(false)
        }
        setForm({ ...form, password: current })
        break
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setDisabled(true)
      await SIGNIN({
        email: form.email,
        password: form.password,
      })
      alert('환영합니다!')
      navigate(ROUTES.TODO)
    } catch (error) {
      alert('이메일이나 비밀번호를 다시 확인해주세요.')
    } finally {
      setDisabled(false)
    }
  }

  return (
    <SignInStyle>
      <Title
        titleType='h1'
        title='로그인'
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
          dataTestid='signin-button'
          text='로그인'
          isDisabled={disabled}
        />
      </FormStyle>
      <Button
        buttonType='transparent'
        text='홈으로'
        onClick={() => navigate(ROUTES.HOME)}
      />
    </SignInStyle>
  )
}

export default SignIn

const SignInStyle = styled.div`
  > button {
    width: 100%;
    background-color: ${COLORS.skyblue};
    margin-top: 50px;
  }
`
