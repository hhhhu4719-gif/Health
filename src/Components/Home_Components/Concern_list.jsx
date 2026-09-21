import { useContext } from "react";
import Style from "../../Styles/Home_css/Concern_list.module.css";
import { Home_Context } from "../../Store/Home-Data-store";
import { Link } from "react-router";

const Concern_list = () => {

    const { concerns } = useContext(Home_Context);

    return (
        <section className={Style.container}>

            <div className={Style.header}>
                <h2>Mental health concerns we care for</h2>
                <p>
                    We offer support for 30+ mental health conditions.
                    Explore some of the most common ones below.
                </p>
            </div>

            <div className={Style.grid}>
                {concerns.map((item) => {

                    const IconComponent = item.icon;

                    return (
                        <div key={item.id} className={Style.card}>

                            <div><Link to={item.link} className={Style.arrow}>
                                <div className={Style.iconCircle}>
                                    <IconComponent />
                                </div>

                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                →
                            </Link></div>
                        </div>
                    );
                })}
            </div>

        </section>
    );
};

export default Concern_list;