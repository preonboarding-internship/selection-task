import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import API_URL from '../constant/apiUrls'
import App from '../App'
import NotFound from '../page/NotFound'
import SignUp from '../page/SignUp'
import SignIn from '../page/SignIn'
import { ROUTES } from '../constant/routes'
import Todo from '../page/Todo'
import Home from '../page/Home'

const router = createBrowserRouter([
  {
    path: API_URL.HOME,
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.SIGNIN, element: <SignIn /> },
      { path: ROUTES.SIGNUP, element: <SignUp /> },
      { path: ROUTES.TODO, element: <Todo /> },
    ],
  },
])

export default router
