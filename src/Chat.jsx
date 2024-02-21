import { useState } from "react";
import { motion } from "framer-motion";
import ChatBotIcon from "./ChatbotIcon.jsx";
import './chatStyles.css'

const ChatBot = ({ position, greetingMessage }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [messages, setMessages] = useState([{ text: greetingMessage || 'Hi there! How can I help you?', is_bot: true }]);
   
   const toggleChatbot = () => setIsOpen(!isOpen);
   
   const handleUserInput = (event) => {
      const input = event.target.value;
      if (event.key === 'Enter' && input.trim()) {
         setMessages([...messages, { text: input, is_bot: false }]);
         // Simulate bot response
         setTimeout(() => {
            setMessages([...messages, { text: input, is_bot: false }, { text: "I'm just a simple bot.", is_bot: true }]);
         }, 1000);
         event.target.value = ''; // Clear input
      }
   };
   
   const containerVariants = {
      open: { opacity: 1, height: "auto" },
      closed: { opacity: 0, height: 0 }
   };
   
   const iconAnimation = {
      animate: {
         y: ["0%", "-10%", "0%"],
         transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      },
   };
   
   
   const positionIconStyle = {
      position: "fixed",
      transform: "scaleX(-1)",
      ...getPositionIconStyles(position)
   };
   
   const positionStyle = {
      position: "fixed",
      ...getPositionStyles(position)
   };
   
   function getPositionIconStyles(position) {
      switch(position) {
         case 'bottom-right':
            return { bottom: "15px", right: "15px" };
         case 'bottom-left':
            return { bottom: "3rem", left: "3rem" };
         case 'top-right':
            return { top: "3rem", right: "3rem" };
         case 'top-left':
            return { top: "3rem", left: "3rem" };
         default:
            return { bottom: "3rem", right: "3rem" };
      }
   };
   
   function getPositionStyles(position) {
      switch (position) {
         case 'bottom-right':
            return {   bottom: "5.5rem", right: "5.5rem" };
         case 'bottom-left':
            return {   bottom: "5.5rem", left: "5.5rem" };
         case 'top-right':
            return {  top: "5.5rem", right: "5.5rem" };
         case 'top-left':
            return {  top: "5.5rem", left: "5.5rem" };
         default:
            return {  bottom: "5.5rem", right: "5.5rem" };
      }
   };
   const styles = {
      inputStyle: {
         borderRadius: "10px",
         padding: "10px",
         border: "1px solid #42495F",
         marginTop: "10px",
         fontSize: "14px",
         color: "#d3dee6",
         background:"#272E43",
         boxShadow: "0px 0px 55.43892px 0px rgba(70, 80, 113, 0.20)"
      }
   };
   const containerStyle = {
      opacity: isOpen ? 1 : 0,
      height: isOpen ? "auto" : 0
   };
   return (
        <div style = { {
           ...positionStyle ,
           margin : "4px" ,
           color : "#f7f7f7" ,
           fontSize : "16px" ,
           width : "400px"
        } } >
           
           <motion.button
                onClick = { toggleChatbot }
                { ...iconAnimation }
                style={{...positionIconStyle}}
           >
              <ChatBotIcon />
           </motion.button >
           { isOpen && (
                <motion.div
                     initial = "closed"
                     animate = { isOpen ? "open" : "closed" }
                     variants = { containerVariants }
                     transition = { { duration : 0.5 } }
                     style = { {
                        ...containerStyle ,
                        boxShadow : "0px 0px 55px 0px" +
                             " rgba(70, 80, 113, 0.20)" ,
                        borderRadius : "20px" ,
                        border : "1px solid #42495F" ,
                        zIndex : 40 ,
                        background : "rgba(41, 50, 69, 0.5)" ,
                        padding : "3rem" ,
                        display : "flex" ,
                        flexDirection : "column" ,
                        width : "100%" ,
                        marginTop : "10px"
                     } }
                >
                   
                   <div style = { { overflowY : "auto" ,display:"flex",flexDirection:"column",gap:"8px"} } >
                      { messages.map( ( msg , index ) => (
                           <div key = { index } style = { {
                              padding      : "8px" ,
                              fontSize     :index !==0 ? "18px" : "16px" ,
                              border       :index !==0 &&  "1px solid #42495F" ,
                              borderRadius : "10px" ,
                              color        : msg.is_bot ? "#F7F7F7" : "#D3DEE6"
                           } } >
                              { msg.text }
                           </div >
                      ) ) }
                   </div >
                   <input
                        type = "text"
                        onKeyDown = { handleUserInput }
                        placeholder = "Type your message..."
                        style = { {
                           ...styles.inputStyle ,
                           "::placeholder" : { color : "#D3DEE6" } // Adjust
                                                                   // the color
                                                                   // here
                        } }
                   />
                </motion.div >
           ) }
        </div >
   );
};

ChatBot.defaultProps = {
   greetingMessage : "👋 Hello there! Welcome to our service. How can I assist you today?",
   position: 'bottom-right',
};

export default ChatBot;
