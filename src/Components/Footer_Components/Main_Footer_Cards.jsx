import React from 'react'
import Styles from "../../Styles/Footer.module.css"
import { Link } from 'react-router-dom';

const Main_Footer_Cards = ({ data }) => {
    return (
        <div className={Styles.mainFootercontent}>
            <h3 className={Styles.footerCardHeading}>
                {data.heading}
            </h3>

            <ul>
                {data.links.map((items, index) => (
                    <li
                        key={index}
                        className={Styles.footerCardLink}
                    >
                        <Link
                            to={items.link}
                            className={Styles.footerCardLink}
                        >
                            {items.lebel}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Main_Footer_Cards;