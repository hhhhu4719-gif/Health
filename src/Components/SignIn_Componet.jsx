import React, { useContext, useRef } from 'react'
import Style from "../Styles/SignIn.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { Profile_Data } from '../Store/Input_Profile_Data-store';

const SignIn_Componet = () => {

  const { Check_login } = useContext(Profile_Data);
  const navigat = useNavigate();

  const Login_Phone_Email = useRef();
  const Login_Password = useRef();

  const Submit = () => {
    const Phone_Email = Login_Phone_Email.current.value;
    const Password = Login_Password.current.value;

    if (!Phone_Email || !Password) {
      alert("Enter Details First");
      return;
    }

    const userData = { Phone_Email, Password };

    const success = Check_login(userData);

    if (success) {
      navigat("/profile");
      Login_Phone_Email.current.value = "";
      Login_Password.current.value = "";
    }
  };

  return (
    <div className={Style.signUpContainer}>
      <h2 className={Style.heading}>LogIn Your Account</h2>

      <div className={Style.inputContainer}>
        <label className={Style.inputlabel}>Phone/E-mail</label>
        <input type='text' className={Style.mainInput} ref={Login_Phone_Email} placeholder="Enter Your Phone or E-mail" />
      </div>
      
      <div className={Style.inputContainer}>
        <label className={Style.inputlabel}>Password</label>
        <input type='text' className={Style.mainInput} ref={Login_Password} placeholder="Enter Your Password" />
      </div>

      <button onClick={Submit} className={Style.submitBtn}>
        Sign In
      </button>

      <p className={Style.loginText}>
        Create account? <Link to="/signUp">Sign Up</Link>
      </p>
    </div>
  )
}

export default SignIn_Componet;