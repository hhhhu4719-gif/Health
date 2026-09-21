import React, { useState } from 'react'
import Styles from "../../Styles/Bottom_contect.module.css"
import { FaPhoneAlt } from "react-icons/fa";
import Chatbot from '../Chatbot';

const Bottom_contect = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <>
      <div className={Styles.BottomContentContainer} onClick={toggleChatbot}>
        <div className={Styles.BottomICon}><FaPhoneAlt /></div>
        <p className={Styles.BottomText}>Chat with us</p>
      </div>
      {isChatbotOpen && <Chatbot onClose={toggleChatbot} />}
    </>
  )
}

export default Bottom_contect;