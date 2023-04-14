import React, { useEffect } from 'react'
import { getCookie } from '../util/cookie'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../constant/routes'

interface Props {
  children: React.ReactNode | any
}

const PrivateRoute = ({ children }: Props) => {
  const accessToken = getCookie('accessToken')
  const navigate = useNavigate()

  useEffect(() => {
    if (!accessToken) {
      alert('로그인이 필요해요!')
      navigate(ROUTES.SIGNIN)
    }
  }, [])

  return accessToken && children
}

export default PrivateRoute
