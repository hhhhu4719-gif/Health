import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Styles from '../../Styles/Header.module.css';
import { IoIosArrowDown } from "react-icons/io";
import Mega_Menu from './Mega_Menu';
import { Mega_Headings_Provider } from '../../Store/Mega-menu-store';
import { Profile_Data } from '../../Store/Input_Profile_Data-store';
import Profil_logo from '../Profil_logo';

const Header = () => {

    const [Active_Menu, SetActive_Menu] = useState(null);
    const { currentUser } = useContext(Profile_Data);

    return (
        <Mega_Headings_Provider>
            <>
                <div className={Styles.mainContainer}>
                    <div className={Styles.firstListContainer}>
                        <h3 ><Link to={"/"} className={Styles.heading}>Place Logo</Link></h3>
                        <ul className={Styles.listContainer}>
                            <li onMouseEnter={() => SetActive_Menu("Experts")} onClick={() => SetActive_Menu(null)}>
                                <NavLink to="#" className={Styles.navLinks} >
                                    Experts
                                    <IoIosArrowDown className={Styles.Arrow} onClick={() => SetActive_Menu(null)} />
                                </NavLink>

                                {Active_Menu === "Experts" && (
                                    <div className={Styles.megaWrapper}>
                                        <Mega_Menu type="Experts" />
                                    </div>
                                )}

                            </li>
                            <li onMouseEnter={() => SetActive_Menu("Clinick")} onClick={() => SetActive_Menu(null)} className={Styles.menuItems}>
                                <NavLink to="#" className={Styles.navLinks} >
                                    Clinick
                                    <IoIosArrowDown className={Styles.Arrow} onClick={() => SetActive_Menu(null)} />
                                </NavLink>

                                {Active_Menu === "Clinick" && (
                                    <div className={Styles.megaWrapper}>
                                        <Mega_Menu type="Clinick" />
                                    </div>
                                )}

                            </li>
                            <li onMouseEnter={() => SetActive_Menu("Service")} onClick={() => SetActive_Menu(null)} className={Styles.menuItems}>
                                <NavLink to="#" className={Styles.navLinks} >
                                    Service
                                    <IoIosArrowDown className={Styles.Arrow} onClick={() => SetActive_Menu(null)} />
                                </NavLink>

                                {Active_Menu === "Service" && (
                                    <div className={Styles.megaWrapper}>
                                        <Mega_Menu type="Service" />
                                    </div>
                                )}
                            </li>
                            <li onMouseEnter={() => SetActive_Menu("Conditions")} onClick={() => SetActive_Menu(null)} className={Styles.menuItems}>
                                <NavLink to="#" className={Styles.navLinks} >
                                    Conditions
                                    <IoIosArrowDown className={Styles.Arrow} onClick={() => SetActive_Menu(null)} />
                                </NavLink>

                                {Active_Menu === "Conditions" && (
                                    <div className={Styles.megaWrapper}>
                                        <Mega_Menu type="Conditions" />
                                    </div>
                                )}
                            </li>

                            <li onMouseEnter={() => SetActive_Menu("Resources")} onClick={() => SetActive_Menu(null)} className={Styles.menuItems}>
                                <NavLink to="#" className={Styles.navLinks}>
                                    Resources
                                    <IoIosArrowDown className={Styles.Arrow} onClick={() => SetActive_Menu(null)} />
                                </NavLink>

                                {Active_Menu === "Resources" && (
                                    <div className={Styles.megaWrapper}>
                                        <Mega_Menu type="Resources" />
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className={Styles.secondListContainer}>
                        <div className={Styles.contactButtonContainer}>
                            <div className={Styles.contactButton}>Phone</div>
                            <div className={Styles.contactButton}>Whatsapp</div>
                        </div>
                        {currentUser ? <Profil_logo /> : <div className={Styles.ButtonContainer}>
                            <Link to={"/signUp"} className={Styles.btn}>SignIn</Link>
                        </div>}
                    </div>
                </div>
            </>
        </Mega_Headings_Provider>
    )
}

export default Header;