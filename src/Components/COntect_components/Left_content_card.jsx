import React, { useContext } from 'react'
import { Link } from 'react-router';
import { Left_Data } from '../../Store/Left-Data-Store';
import Styles from '../../Styles/Left_contect.module.css'


const Left_Content_card = ({ active }) => {

    const { Data } = useContext(Left_Data);

    return (
        <>
            <div className={active === true ? Styles.mainMenuContainer : Styles.mainMenuContainerCollepse}>
                {Data.map((items , key) => {
                    return (
                        <div className={Styles.LinkContainer} key={key}>
                            <Link to={items.link} className={Styles.Links}>
                                {items.lebel}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Left_Content_card;