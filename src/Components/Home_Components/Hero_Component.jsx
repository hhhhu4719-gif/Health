import React from 'react';
import Styles from '../../Styles/Home_css/Hero.module.css';
import DoctorImage from "../../assets/Doctor_Imaage.png"

const Hero_Component = () => {
    return (
        <>
            <div className={Styles.HeroComponentContainer}>
                <div className={Styles.leftHeroContent}>
                    <div className={Styles.Uppertext}>
                        Welcome to our Medical Treatment Platform
                    </div>
                    <h1 className={Styles.MainHeading}>We Take Care Of Your Health</h1>
                    <p className={Styles.HeroComponentText}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente voluptas, expedita perferendis ut excepturi dignissimos non cupiditate optio tempora ipsum, aliquam, accusantium sit quam eius? Libero quod odio maxime tenetur provident eaque, ipsam numquam sequi autem fugiat blanditiis accusantium ullam.
                    </p>
                    <div className={Styles.ButtonContainer}>
                        <button className={Styles.btn1}>AboutUs</button>
                        <button className={Styles.btn2}>Ckeck report</button>
                    </div>
                </div>
                <div className={Styles.rightHeroContent}>
                    <img src={DoctorImage} alt='There is Doctors Image' className={Styles.DoctorImages} />
                </div>
                <div className={Styles.circul1}></div>
                <div className={Styles.circul2}></div>
                <div className={Styles.circul3}></div>
                <div className={Styles.DoctorImageContainer}></div>
            </div>
        </>
    )
}

export default Hero_Component;