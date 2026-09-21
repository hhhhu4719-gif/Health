import React from 'react'
import Left_Profile_Component from '../Components/Profile_Components/Left_Profile_Component';
import Right_Profile_Component from '../Components/Profile_Components/Right_Profile_Component';
import Style from "../Styles/Profile_css/Profile.module.css";

const Profile = () => {
  return (
    <div className={Style.mainWrapper}>
      <div className={Style.profileCard}>
        <Left_Profile_Component />
        <Right_Profile_Component />
      </div>
    </div>
  )
}

export default Profile;