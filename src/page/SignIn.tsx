import React from 'react'
import styled from 'styled-components'
import Title from '../component/common/Title'
import { FormStyle } from './SignUp'
import Input from '../component/common/Input'
import Button from '../component/common/Button'
import { useNavigate } from 'react-router-dom'
import COLORS from '../constant/root'
import { ROUTES } from '../constant/routes'

const SignIn = () => {
  const navigate = useNavigate()

  return (
    <SignInStyle>
      <Title
        titleType='h1'
        title='로그인'
        margin='0 0 50px'
      />
      <FormStyle>
        <Input
          dataTestid='email-input'
          placeholder='이메일'
        />
        <Input
          dataTestid='password-input'
          type='password'
          placeholder='비밀번호'
        />
        <Button
          type='submit'
          dataTestid='signin-button'
          text='로그인'
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
