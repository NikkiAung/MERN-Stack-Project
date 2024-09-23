import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import RecipeForm from './pages/RecipeForm.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUpForm from './pages/SignUpForm.jsx'
import SignInForm from './pages/SignInForm.jsx'
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children : [
        {
          path : '/',
          element : <Home/>
        },
        {
          path : '/about',
          element : <About/>
        },
        {
          path : '/contact',
          element : <Contact/>
        },
        {
          path : '/recipes/create',
          element : <RecipeForm/>
        },
        {
          path: '/recipes/update/:id',
          element: <RecipeForm/>
        },
        {
          path: '/sign-up',
          element: <SignUpForm/>
        },
        {
          path: '/sign-in',
          element: <SignInForm/>
        }
      ]
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
)
