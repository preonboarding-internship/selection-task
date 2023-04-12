import React from 'react'
import Button from '../component/common/Button'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../constant/routes'
import styled from 'styled-components'

const Home = () => {
  const navigate = useNavigate()
  return (
    <HomeStyle>
      <Button
        text='로그인'
        onClick={() => navigate(ROUTES.SIGNIN)}
      />
      <Button
        text='회원가입'
        onClick={() => navigate(ROUTES.SIGNUP)}
      />
    </HomeStyle>
  )
}

export default Home

const HomeStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
