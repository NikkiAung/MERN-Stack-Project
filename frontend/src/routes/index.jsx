import App from '../App.jsx'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import RecipeForm from '../pages/RecipeForm.jsx'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignUpForm from '../pages/SignUpForm.jsx'
import SignInForm from '../pages/SignInForm.jsx'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext.jsx'

function Index() {
    let {user} = useContext(AuthContext);
    const router = createBrowserRouter([
        {
          path: "/",
          element: <App/>,
          children : [
            {
              path : '/',
              element : user ? <Home/> : <Navigate to={'/sign-in'}/>
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
              element : user ? <RecipeForm /> : <Navigate to={'/sign-in'} />
            },
            {
              path: '/recipes/update/:id',
              element: <RecipeForm/>
            },
            {
              path: '/sign-up',
              element: !user ? <SignUpForm /> : <Navigate to={'/'} />
            },
            {
              path: '/sign-in',
              element: !user ? <SignInForm /> : <Navigate to={'/'} />
            }
          ]
        },
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Index
