import React from 'react'
import Styles from '../../Styles/Footer.module.css';
import { Link } from 'react-router';
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const Bottom_Footer = () => {
  return (
    <>
      <div className={Styles.BottomFooterContainer}>
        <div className={Styles.BottomIcons}>
          <div className={Styles.leftLocalIcons}>
            <div className={Styles.localIcons}>Icon1</div>
            <div className={Styles.localIcons}>Icon2</div>
            <div className={Styles.localIcons}>Icon3</div>
          </div>
          <div className={Styles.RightLocalIcons}>Platform Icon</div>
        </div>
        <div className={Styles.BootomLinksContainer}>
          <div className={Styles.leftBottomLinks}>
            <Link to="#">Privecy Policy</Link>
            <Link to="#">Terms and Conditions</Link>
            <Link to="#">Site Map</Link>
            <Link to="#">Help</Link>
          </div>
          <div className={Styles.rightBottomLinks}>
            <Link to="#"><FaInstagram /></Link>
            <Link to="#"><FaXTwitter /></Link>
            <Link to="#"><FaFacebookSquare /></Link>
            <Link to="#"><CiLinkedin /></Link>
          </div>
        </div>
        <div className={Styles.TextContainer}>
          <p className={Styles.bottomText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorem distinctio necessitatibus dolores deserunt ut. Rem quia expedita asperiores iusto?</p>
          <p className={Styles.bottomText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam, fuga aliquid nobis cupiditate provident esse placeat vero maiores facilis ex dolor nihil! Numquam sequi ex voluptas quaerat repudiandae molestias tempore sint! Adipisci laboriosam unde, illum quam rem quaerat doloremque. Magni incidunt fuga expedita illum praesentium labore dignissimos assumenda perspiciatis?</p>
          <p className={Styles.bottomText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque repudiandae ullam id eius sunt officia?</p>
        </div>
      </div>
    </>
  )
}

export default Bottom_Footer;