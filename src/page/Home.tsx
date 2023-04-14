import React from 'react'
import Button from '../component/common/Button'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../constant/routes'
import styled from 'styled-components'
import Title from '../component/common/Title'

const Home = () => {
  const navigate = useNavigate()

  return (
    <HomeStyle>
      <Title
        titleType='h1'
        title='안녕하세요!'
        margin='0 0 50px'
      />
      <Button
        text='로그인 페이지'
        onClick={() => navigate(ROUTES.SIGNIN)}
      />
      <Button
        text='회원가입 페이지'
        onClick={() => navigate(ROUTES.SIGNUP)}
      />
    </HomeStyle>
  )
}

export default Home

const HomeStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`
