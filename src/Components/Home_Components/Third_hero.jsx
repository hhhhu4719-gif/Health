import React, { useContext } from 'react'
import Style from "../../Styles/Home_css/Third_hero.module.css"
import { Home_Context } from '../../Store/Home-Data-store';

const Third_hero = () => {
    const {testimonials}= useContext(Home_Context);
    
    return (
        <section className={Style.container}>
            <div className={Style.header}>
                <p className={Style.subTitle}>OUR REFERENCES</p>
                <h2>
                    Our track record speaks for itself. Many individuals have chosen
                    our medical center and have had positive experiences.
                </h2>
            </div>

            <div className={Style.testimonialGrid}>
                {testimonials.map((item) => (
                    <div key={item.id} className={Style.card}>
                        <p className={Style.message}>"{item.message}"</p>
                        <div className={Style.userInfo}>
                            <h4>{item.name}</h4>
                            <span>{item.role}</span>
                        </div>
                        <div className={Style.rating}>
                            {"⭐".repeat(item.rating)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Third_hero;