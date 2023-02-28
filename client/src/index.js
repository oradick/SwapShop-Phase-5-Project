import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import NewListingPage from './components/NewListingPage';
import MyProfilePage from './components/MyProfilePage';


//index.js
const router = createBrowserRouter([
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
  {
    path: "/hello",
    element: <App />,
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
