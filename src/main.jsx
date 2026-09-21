import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import App from './App';
import Home from './Pages/Home';
import Experts from './Pages/Experts';
import Clinick from './Pages/Clinick';
import Conditions from './Pages/Conditions';
import Service from './Pages/Service';
import Resources from './Pages/Resources';
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import AboutUs from './Pages/AboutUs';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index element={<Home/>}></Route>
      <Route path='/experts' element={<Experts />}></Route>
      <Route path='/clinics' element={<Clinick />}></Route>
      <Route path='/conditions' element={<Conditions />}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/resources' element={<Resources/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/signIn' element={<SignIn/>}></Route>
      <Route path='/signUp' element={<SignUp/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
