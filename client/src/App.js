import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import NewListingPage from './components/NewListingPage';
import MyProfilePage from './components/MyProfilePage';
import { useState, useEffect } from "react";

function App() {

  const router = createBrowserRouter([
    {
      path: "*",
      element: <div><h1>404 NOT FOUND</h1></div>
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/new-listing",
      element: <NewListingPage />,
    },
    {
      path: "/my-profile",
      element: <MyProfilePage />,
    },

  ]);

  return(
    <div>
      <RouterProvider router={router}/>  
    </div>
  )

}

export default App;
