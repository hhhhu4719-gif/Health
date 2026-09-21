import React from 'react'
import Styles from '../Styles/Home_css/Home.module.css'
import Hero_Component from '../Components/Home_Components/Hero_Component';
import Home_service from '../Components/Home_Components/Home_service';
import { Home_Context_Provider} from '../Store/Home-Data-store';
import Second_hero from '../Components/Home_Components/Second_hero';
import Third_hero from '../Components/Home_Components/Third_hero';
import Forth_hero from '../Components/Home_Components/Fourth_hero';
import Concern_list from '../Components/Home_Components/Concern_list';
import Header from '../Components/Header_Components/Header';
import Left_Contect from '../Components/COntect_components/Left_Contect';
import Bottom_contect from '../Components/COntect_components/Bottom_contect';
import Footer from '../Components/Footer_Components/Footer';

const Home = () => {
  return (
    <div className={Styles.mainHomeContainer}>
      <Home_Context_Provider>
        <Header />
        <Left_Contect />
        <Hero_Component />
        <Home_service />
        <Second_hero />
        <Third_hero />
        <Forth_hero />
        <Concern_list />
        <Bottom_contect />
        <Footer />
      </Home_Context_Provider>
    </div>
  )
}

export default Home;