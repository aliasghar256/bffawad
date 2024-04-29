import config from "./config.js";
import MessageParser from "./MessageParser.jsx";
import ActionProvider from "./ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./ChatbotComponent.css";

const saveMessages = (messages, HTMLString) => {
  localStorage.setItem("chat_messages", JSON.stringify(messages));
};

const loadMessages = () => {
  const messages = JSON.parse(localStorage.getItem("chat_messages"));
  return messages;
};

export default function ChatbotComponent() {
  return (
    <div>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageHistory={loadMessages()}
        messageParser={MessageParser}
        saveMessages={saveMessages}
      />
      <image src="../public/robotpic.png" alt="robot" />
    </div>
  );
}
