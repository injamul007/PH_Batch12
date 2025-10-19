import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from "./Pages/Home.jsx"
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import RootLayout from './Layouts/RootLayout.jsx';
import PlantDetails from './Pages/PlantDetails.jsx';
import  axios  from 'axios';


const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: ()=> fetch('https://openapi.programming-hero.com/api/plants'),
        Component: Home
      },
      {
        path: '/home',
        loader: ()=> fetch('https://openapi.programming-hero.com/api/plants'),
        Component: Home
      },
      {
        path: '/contact',
        Component: Contact
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: `/plant-details/:id`,
        loader: ({params}) => axios(`https://openapi.programming-hero.com/api/plant/${params.id}`),
        Component: PlantDetails
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
