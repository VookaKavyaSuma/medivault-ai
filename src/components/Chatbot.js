import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react"; // chatbot + close icons

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    // Later: send to AI backend
  };

  return (
    <div>
      {/* Chatbot Floating Button */}
      <button className="chatbot-icon" onClick={toggleChat}>
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <h4>💬 AI Health Assistant</h4>
          <div className="chat-window">
            {messages.map((m, i) => (
              <p key={i} className={m.sender === "user" ? "user-msg" : "bot-msg"}>
                {m.text}
              </p>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask about your report..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
