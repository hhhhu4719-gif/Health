import { useContext } from "react";
import classNames from "classnames";
import { Home_Context } from "../../Store/Home-Data-store";
import Style from "../../Styles/Home_css/Fourth_hero.module.css";

const Forth_hero = () => {

    const { features } = useContext(Home_Context);

    return (
        <section className={Style.container}>
            <h2 className={Style.heading}>
                We Are Here To Protect Your Health
            </h2>

            <div className={Style.featureGrid}>
                {features.map((item, index) => (
                    <div
                        key={item.id}
                        className={classNames(
                            Style.card,
                            {
                                [Style.primary]: index === 0
                            }
                        )}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Forth_hero;