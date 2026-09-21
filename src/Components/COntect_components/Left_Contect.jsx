import React, { useState } from 'react'
import Styles from "../../Styles/Left_contect.module.css"
import { Left_Data_Provider } from '../../Store/Left-Data-Store';
import Left_Content_card from './Left_Content_card';

const Left_Contect = () => {

    const [isActive , setisActive] = useState(false)
    return (
        <>
            <Left_Data_Provider>
                <div className={Styles.LeftContentContainer}>
                    <div className={Styles.clickebelSide}>
                        <ul className={Styles.wordContainer} onClick={()=>{setisActive(!isActive)}}>
                            <li className={Styles.Words}>C</li>
                            <li className={Styles.Words}>O</li>
                            <li className={Styles.Words}>N</li>
                            <li className={Styles.Words}>T</li>
                            <li className={Styles.Words}>E</li>
                            <li className={Styles.Words}>C</li>
                            <li className={Styles.Words}>T</li>
                        </ul>
                    </div>
                    <Left_Content_card active={isActive}/>
                </div>
            </Left_Data_Provider>
        </>
    )
}

export default Left_Contect;