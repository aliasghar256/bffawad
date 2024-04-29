import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const Options = ({ actionProvider }) => {
  const options = [
    { text: "Option 1", handler: () => actionProvider.sendMessage("Option 1") },
    { text: "Option 2", handler: () => actionProvider.sendMessage("Option 2") },
    { text: "Option 3", handler: () => actionProvider.sendMessage("Option 3") },
  ];

  return (
    <div>
      {options.map((option, index) => (
        <button key={index} onClick={option.handler}>
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Options;
