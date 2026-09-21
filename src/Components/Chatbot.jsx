import React, { useState, useRef, useEffect } from 'react';
import Styles from "../Styles/Chatbot.module.css";
import { IoMdSend } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage = { text: inputValue, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
    }, 500);
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return "Hello! How can I assist you with your health concerns today?";
    } else if (input.includes("appointment") || input.includes("book")) {
      return "To book an appointment, please call us at +91 1234567890 or visit our 'Clinics' page.";
    } else if (input.includes("service")) {
      return "We offer various health services. Please check our 'Services' page for more details.";
    } else if (input.includes("doctor") || input.includes("expert")) {
      return "You can find our expert doctors on the 'Experts' page. They are available for consultations.";
    } else if (input.includes("hours") || input.includes("time")) {
      return "We are open Monday to Saturday, 9 AM to 8 PM. Closed on Sundays.";
    } else if (input.includes("location") || input.includes("address")) {
      return "Our clinic locations are listed on our 'Clinics' page. We have multiple branches to serve you better.";
    } else if (input.includes("emergency")) {
      return "For emergencies, please call our 24/7 helpline at +91 1234567890 immediately.";
    } else if (input.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with?";
    } else if (input.includes("bye") || input.includes("goodbye")) {
      return "Goodbye! Take care and feel free to reach out anytime!";
    } else {
      return "I'm here to help! You can ask me about appointments, services, doctors, clinic hours, or locations.";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className={Styles.chatbotContainer}>
      <div className={Styles.chatbotHeader}>
        <div className={Styles.headerLeft}>
          <FaRobot className={Styles.robotIcon} />
          <h3>Health Assistant</h3>
        </div>
        <button className={Styles.closeBtn} onClick={onClose}>
          <IoClose />
        </button>
      </div>
      
      <div className={Styles.chatbotMessages}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${Styles.message} ${
              message.sender === "user" ? Styles.userMessage : Styles.botMessage
            }`}
          >
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className={Styles.chatbotInput}>
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSend} className={Styles.sendBtn}>
          <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
