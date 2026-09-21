import React from 'react'
import Header from './Components//Header_Components/Header'
import Footer from './Components/Footer_Components/Footer'
import '../src/App.css';
import { Mega_Headings_Provider } from './Store/Mega-menu-store'
import { Outlet } from 'react-router';
import Left_Contect from './Components/COntect_components/Left_Contect';
import Bottom_contect from './Components/COntect_components/Bottom_contect';
import { Profile_Data_provider } from './Store/Input_Profile_Data-store';

const App = () => {
  return (
    <>
      <Profile_Data_provider >
        <Outlet />
      </Profile_Data_provider>
    </>
  )
}

export default App