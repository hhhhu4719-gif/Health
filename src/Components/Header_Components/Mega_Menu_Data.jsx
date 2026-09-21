import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import Styles from '../../Styles/Mega_Menu.module.css';

const Mega_Menu_Data = ({ value }) => {

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className={Styles.MegaMenuContainer}>
        {value.map((items, index) => {
          return (
            <>
              <div key={index} className={Styles.MainItemcontainer}>
                <div  className={Styles.itemContainer}>
                  <div className={Styles.leftSide}>
                    <div className={Styles.Icon}>{items.icon}</div>
                    <p >
                      <Link
                        to={items.link}
                        onMouseEnter={() => setHoverIndex(index)}
                        className={Styles.label}
                      >
                        {items.lebel}
                      </Link>
                    </p>
                  </div>
                  {hoverIndex === index && <Link to="#" className={Styles.ArrowIcon} onClick={() => { setHoverIndex(null) }}><FaArrowRightLong /></Link>}
                </div>
                {items.peragraph && <div className={Styles.info}>{items.info}</div>}
              </div>
            </>
          )
        })}
    </div>
  )
}

export default Mega_Menu_Data;
