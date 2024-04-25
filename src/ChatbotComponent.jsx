import config from "./config.js";
import MessageParser from "./MessageParser.jsx";
import ActionProvider from "./ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./ChatbotComponent.css";

export default function ChatbotComponent() {
  return (
    <div>
      <Chatbot
        className="chatbot"
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        placeholderText="Type a message..."
      />
      <image src="../public/robotpic.png" alt="robot" />
    </div>
  );
}
