import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './RootLayout/RootLayout';
import AuthProvider from './context/AuthProvider';
import Home from './components/Home/Home';
import AllProducts from './components/AllProducts/AllProducts';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MyProducts from './components/MyProducts/MyProducts';
import MyBids from './components/MyBids/MyBids';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ProductDetails from './ProductDetails/ProductDetails';
import CreateProduct from './components/CreateProduct/CreateProduct';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/all-products',
        element: <AllProducts></AllProducts>
      },
      {
        path: '/create-product',
        element: <PrivateRoute><CreateProduct></CreateProduct></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/my-products',
        element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
      },
      {
        path: '/my-bids',
        element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
      },
      {
        path: '/product-details/:id',
        hydrateFallbackElement: <div className='flex justify-center items-center min-h-[50vh]'><span className="loading loading-bars loading-xl"></span></div>,
        loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`),
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
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
