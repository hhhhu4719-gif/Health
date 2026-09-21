import React, { useContext } from 'react'
import { Profile_Data } from '../Store/Input_Profile_Data-store'
import Style from "../Styles/Header.module.css";
import { useNavigate } from 'react-router-dom';

const Profil_logo = () => {

  const navigate = useNavigate();

  const { currentUser } = useContext(Profile_Data)
  return (
    <div className={Style.ProfilLogo} onClick={()=>navigate("/profile")}>
      {currentUser?.name?.charAt(0)?.toUpperCase()}
    </div>
  )
}

export default Profil_logo;