import React from 'react'
import styled from 'styled-components'
import Input from '../component/common/Input'
import Title from '../component/common/Title'
import Button from '../component/common/Button'
import COLORS from '../constant/root'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../constant/routes'

const SignUp = () => {
  const navigate = useNavigate()

  return (
    <SignUpStyle>
      <Title
        titleType='h1'
        title='회원가입'
        margin='0 0 50px'
      />
      <FormStyle>
        <Input
          dataTestid='email-input'
          placeholder='이메일'
        />
        <Input
          dataTestid='password-input'
          placeholder='비밀번호'
        />
        <Button
          dataTestid='signup-button'
          text='회원가입'
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
`
