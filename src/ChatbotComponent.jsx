import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./config.js";
import MessageParser from "./MessageParser.jsx";
import ActionProvider from "./ActionProvider.jsx";
import "react-chatbot-kit/build/main.css";

const Avatar = () => (
  <div style={{ padding: "10px" }}>
    <img
      src="/robotpic.png" // URL of the profile picture
      alt="Chatbot Avatar"
      style={{ width: "50px", height: "50px", borderRadius: "50%" }}
    />
  </div>
);

export default function ChatbotComponent() {
  return (
    <div>
      <Avatar />
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}
