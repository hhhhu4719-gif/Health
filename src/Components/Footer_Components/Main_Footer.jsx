import React, { useContext } from 'react'
import styles from '../../Styles/Footer.module.css';
import { Footer_Context } from '../../Store/Footer-Data-store';
import Main_Footer_Cards from './Main_Footer_Cards';

const Main_Footer = () => {
   const {service,Experts,Conditions,Centers,About} = useContext(Footer_Context);
  return (
    <>
        <div className={styles.mainFootercontainer}>
            <Main_Footer_Cards data={Centers}/>
            <Main_Footer_Cards data={About}/>
            <Main_Footer_Cards data={Experts}/>
            <Main_Footer_Cards data={Conditions}/>
            <Main_Footer_Cards data={service}/>
        </div>
    </>
  )
}

export default Main_Footer;