import React from 'react'
import Top_Footer from './Top_Footer';
import Main_Footer from './Main_Footer';
import Bottom_Footer from './Bottom_Footer';
import { Footer_Context_Provider } from '../../Store/Footer-Data-store';

const Footer = () => {
  return (
    <>
      <Footer_Context_Provider>
        <Top_Footer />
        <Main_Footer />
        <Bottom_Footer />
      </Footer_Context_Provider>
    </>
  )
}

export default Footer;