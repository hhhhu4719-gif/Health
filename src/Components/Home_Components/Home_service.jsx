import React, { useContext, useState } from 'react'
import Style from "../../Styles/Home_css/Home_service.module.css";
import { Home_Context } from '../../Store/Home-Data-store';

const Home_service = () => {
  const { service_Data } = useContext(Home_Context);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleParagraph = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);  
    } else {
      setActiveIndex(index); 
    }
  };

  return (
    <div className={Style.mainServiceContainer}>
      {
        service_Data.map((items, index) => {
          return (
            <div key={index} className={Style.serviceContainer}>

              <div className={Style.serviceLogo}>
                {items.logo}
              </div>

              <h3
                className={Style.serviceHeading}
                onMouseEnter={() => toggleParagraph(index)}
                onClick={()=>setActiveIndex(null)}
              >
                {items.heading}
              </h3>

              {activeIndex === index && (
                <p className={Style.servicePeregraph}>
                  {items.peregraph}
                </p>
              )}
            </div>
          )
        })
      }
    </div>
  )
}

export default Home_service;
