import React from 'react'

import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

import ReactDOM from 'react-dom/client'
import Aboutuspage from './pages/Aboutuspage.jsx'
import Communitypage from './pages/Communitypage.jsx'
import Tipspage from './pages/Tipspage.jsx'
import Loginpage from './pages/Loginpage.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aboutus",
    element: <Aboutuspage />,
  },
  {
    path: "/tips",
    element: <Tipspage />,
  },
  {
    path: "/community",
    element: <Communitypage />,
  },
  {
    path: "/login",
    element: <Loginpage />,
  },

  

  
]);

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <ChakraProvider>
        {/* <App /> */}
        <RouterProvider router={router} />
        </ChakraProvider>
    
  </React.StrictMode>,
  
  
)
