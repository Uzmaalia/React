import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx"; 
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx'
import GitHub from './components/GitHub/GitHub.jsx'
import { githubInfoLoader } from './components/GitHub/GitHub.jsx';
import User from './components/User/User.jsx';
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {

    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      }, 
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        loader: githubInfoLoader,
        path: "github",
        element: <GitHub/>
      },
      {
        path: "user/:userid",
        element: <User/>
      },

    ]

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
