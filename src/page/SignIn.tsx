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

const SignIn = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(false)
  const accessToken = getCookie('accessToken')

  useEffect(() => {
    if (accessToken) {
      navigate(ROUTES.TODO)
      alert('로그인 상태입니다!')
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, type } = e.target
    switch (type) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setDisabled(true)
      await SIGNIN({
        email: email,
        password: password,
      })
      alert('환영합니다!')
      navigate(ROUTES.TODO)
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
          onChange={handleChange}
        />
        <Input
          dataTestid='password-input'
          type='password'
          placeholder='비밀번호'
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
