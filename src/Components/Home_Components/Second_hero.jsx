import React, { useContext } from 'react'
import Style from '../../Styles/Home_css/Second_hero.module.css';
import { Home_Context } from '../../Store/Home-Data-store';
import LeftImage from "../../assets/LeftImage.png"

const Second_hero = () => {
    const { aboutData } = useContext(Home_Context);
    return (
        <>
            <div className={Style.SecondHeroContainer}>
                <div className={Style.LeftPart}>
                    <div className={Style.LeftImageWrapper}><img src={LeftImage} alt='There is a LeftImage' className={Style.LeftPartImage} /></div>
                </div>
                <div className={Style.RightPart}>
                    <div className={Style.UpperContainer}>
                        <h1 className={Style.RightPartMainHeading}>{aboutData.heading}</h1>
                        <p className={Style.RightPartParagraph}>{aboutData.paragraph}</p>
                    </div>
                    <div className={Style.RightMap}>
                        {
                            aboutData.features.map((items) => {
                                return (<>
                                    <h2 className={Style.RightPartSubHeading}>{items.title}</h2>
                                    <p className={Style.RightPartParagraph}>{items.description}</p>
                                </>)
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Second_hero;