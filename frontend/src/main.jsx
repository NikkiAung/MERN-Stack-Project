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
        }
      ]
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
)
