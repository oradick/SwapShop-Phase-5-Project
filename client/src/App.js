import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import NewListingPage from './components/NewListingPage';
import MyProfilePage from './components/MyProfilePage';
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null)

  // useEffect for auto-login
  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if (response.ok) {
        response.json()
        .then((user) => setUser(user))
      }
    })
  }, [])

  function handleLogin(user){
    setUser(user);
  }

  function handleLogout(){
    setUser(null);
  }

  const router = createBrowserRouter([
    {
      path: "*",
      element: <div><h1>404 NOT FOUND</h1></div>
    },
    {
      path: "/",
      element: <Login handleLogin={handleLogin}/>,
    },
    {
      path: "/signup",
      element: <Signup handleLogin={handleLogin}/>,
    },
    {
      path: "/home",
      element: <Home user={user}/>,
    },
    {
      path: "/new-listing",
      element: <NewListingPage />,
    },
    {
      path: "/my-profile",
      element: <MyProfilePage user={user} handleLogout={handleLogout}/>,
    },

  ]);

  return(
    <div>
      <RouterProvider router={router}/>  
    </div>
  )

}

export default App;
