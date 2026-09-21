import React, { useContext } from 'react';
import Style from "../../Styles/Profile_css/Left_Component.module.css";
import { Profile_Data } from '../../Store/Input_Profile_Data-store';
import { Link, useNavigate } from 'react-router-dom';

const Left_Profile_Component = () => {

  const { currentUser, logout } = useContext(Profile_Data);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div className={Style.MainContainer}>
      <div className={Style.profileLogoContainer}>
        <div className={Style.profileLogo}>
          {currentUser?.name?.charAt(0)?.toUpperCase()}
        </div>
        <h2 className={Style.userName}>{currentUser.name}</h2>
        <p className={Style.userInfo}>ID: 4796448 • created on 14 Feb 2026</p>
      </div>
      <div className={Style.linksContainer}>
        <Link to={"/"} className={Style.Link}>Home</Link>
        <Link to={"/about"} className={Style.Link}>AboutUs</Link>
        <Link to={"/settings"} className={Style.Link}>Settings</Link>
        <button className={Style.logOut} onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  )
}

export default Left_Profile_Component;