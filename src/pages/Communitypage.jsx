import React, { useContext } from 'react';
import Login from "../Pg/login/Login";
import Register from "../Pg/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "../Components/Navbar";

import LeftBar from "../Comp/leftBar/LeftBar";
import RightBar from "../Comp/rightBar/RightBar";
import Home from "../Pg/home/Home";
import Profile from "../Pg/profile/Profile";
// import "../style.scss";

import { DarkModeContext } from "../context/darkModeContext";
import { AuthContext } from "../context/authContext";

import { Container,Box  } from '@chakra-ui/react'
import NavBar from '../Comp/navbar/navbar';
// import Navbar from '../components/Navbar'

function Communitypage() {
  const {currentUser} = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);


  
  // <Layout />

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }

  //   return children;
  // };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <ProtectedRoute>
  //         <Layout />
  //       </ProtectedRoute>
  //     ),
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //       {
  //         path: "/profile/:id",
  //         element: <Profile />,
  //       },
  //     ],
  //   },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
  //]);

  return (
    <Container w='100%' h='100%' minWidth='full' minHeight='full'  align='start'  bg='#040D12' color='white'>
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <NavBar/>
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
      </Container>
    
  );
}

export default Communitypage;