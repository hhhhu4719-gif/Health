import React from 'react';
import Styles from '../../Styles/Footer.module.css';

const Top_Footer = () => {
    return (
        <>
            <div className={Styles.TopFooterContainer}>
                <div className={Styles.leftConent}>
                    <p className={Styles.TopFooterRightText}>We want you to feel better,
                        get better, stay better</p>
                </div>
                <div className={Styles.rightContent}>
                    <p className={Styles.rightContentText}>Reach Out any time at:</p>
                    <div className={Styles.rightContentLinks}>Exampel@gmail.com</div>
                    <div className={Styles.rightContentLinks}>+91 12345678</div>
                </div>
            </div>
        </>
    )
}

export default Top_Footer;