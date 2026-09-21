import React, { useContext } from 'react'
import Style from "../../Styles/Profile_css/Right_Component.module.css";
import { Profile_Data } from '../../Store/Input_Profile_Data-store';

const Right_Profile_Component = () => {

    const { currentUser } = useContext(Profile_Data);

    if (!currentUser) {
        return (
            <div className={Style.noUser}>
                Please login to view profile.
            </div>
        );
    }

    return (
        <div className={Style.rightProfileContainer}>
            <div className={Style.sectionTitle}>Profile Information</div>
            <div className={Style.basicDataContainer}>
                <div className={Style.BasicData}>
                    <span className={Style.label}>Name:</span>
                    <span className={Style.value}>{currentUser.name}</span>
                </div>
                <div className={Style.BasicData}>
                    <span className={Style.label}>Phone Number:</span>
                    <span className={Style.value}>{currentUser.phone || 'Not provided'}</span>
                </div>
                <div className={Style.BasicData}>
                    <span className={Style.label}>Email Address:</span>
                    <span className={Style.value}>{currentUser.email}</span>
                </div>
            </div>
            <div className={Style.sectionTitle}>Account Details</div>
            <div className={Style.additionalDataContainer}>
                <div className={Style.BasicData}>
                    <span className={Style.label}>Username:</span>
                    <span className={Style.value}>{currentUser.username}</span>
                </div>
                <div className={Style.BasicData}>
                    <span className={Style.label}>Password:</span>
                    <span className={Style.value}>••••••••</span>
                </div>
            </div>
        </div>
    )
}

export default Right_Profile_Component;