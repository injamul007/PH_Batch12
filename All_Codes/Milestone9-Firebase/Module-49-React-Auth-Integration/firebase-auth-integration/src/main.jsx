import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Layout/Root'
import Home from './components/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import AuthProvider from './context/AuthProvider/AuthProvider'
import Orders from './components/Orders/Orders'
import PrivateRoute from './Routes/PrivateRoute'
import Profile from './Profile/Profile'
import Dashboard from './Dashboard/Dashboard'


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/home',
        Component: Home
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
