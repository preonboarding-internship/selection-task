import React from 'react'
import { Outlet } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  )
}

export default App
