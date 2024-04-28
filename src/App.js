import ChatbotComponent from "./ChatbotComponent";
import "./App.css";

//I am watching you
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="my-chatbot-container">
        < ChatbotComponent className="chatbot" />
        </div>
      </header>
    </div>
  );
}