import React, { useContext, useRef } from 'react';
import Style from "../Styles/SignUp.module.css";
import { Profile_Data } from '../Store/Input_Profile_Data-store';
import { Link, useNavigate } from "react-router-dom";

const SignUp_Component = () => {

  const { get_Data } = useContext(Profile_Data);
  const navigate = useNavigate();

  const user_Name = useRef();
  const User_Phone = useRef();
  const User_E_mail = useRef();
  const User_Password = useRef();
  const user_username = useRef();

  const SubmittHandler = () => {

    const Name = user_Name.current.value;
    const Phone = User_Phone.current.value;
    const E_Mail = User_E_mail.current.value;
    const Password = User_Password.current.value;
    const Username = user_username.current.value;

    if (!Name || !Phone || !E_Mail || !Password || !Username) {
      alert("Fill Info First");
      return;
    }

    const userData = { Name, Phone, E_Mail, Password , Username};

    get_Data(userData);

    navigate("/profile");

    user_Name.current.value = "";
    User_Password.current.value="";
    User_Phone.current.value = "";
    User_E_mail.current.value = "";
    user_username.current.value = "";
  };

  return (
    <div className={Style.signUpContainer}>
      <h2 className={Style.heading}>Create Your Account</h2>

      <div className={Style.inputContainer}>
        <label className={Style.inputlabel}>Full Name</label>
        <input type='text' className={Style.mainInput} ref={user_Name} placeholder="Enter Your Full Name" />
      </div>

      <div className={Style.inputContainer}>
        <label className={Style.inputlabel}>User Name</label>
        <input type='text' className={Style.mainInput} ref={user_username} placeholder="Enter Your User Name" />
      </div>

      <div className={Style.inputContainer}>
        <label className={Style.inputlabel}>Phone</label>
        <input type='number' className={Style.mainInput} ref={User_Phone} placeholder="Enter Your Phone No." />
      </div>

      <div className={Style.inputContainer}>
        <label className={Style.inputlabel}>E-mail</label>
        <input type='email' className={Style.mainInput} ref={User_E_mail} placeholder="Enter Your E-mail" />
      </div>

      <div className={Style.inputContainer}>
        <label className={Style.inputlabel}>Password</label>
        <input type='password' className={Style.mainInput} ref={User_Password} placeholder="Enter Your Password" />
      </div>

      <button onClick={SubmittHandler} className={Style.submitBtn}>
        Sign Up
      </button>

      <p className={Style.loginText}>
        Already have an account? <Link to="/signIn">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp_Component;