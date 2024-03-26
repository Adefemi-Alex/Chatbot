import { useState } from "react";
import chatLogo from "../src/assets/chat-logo.png";
import sendButton from "../src/assets/send.png";
import "./App.css";

function App() {
  return (
    <div className="app">
      <section className="side-bar">
        <div className="new-chat">
          <img src={chatLogo} className="chat-logo" />
          <p>New Chat</p>
        </div>
        <ul className="history"></ul>
        <nav>
          <p>made by Alex</p>
        </nav>
      </section>
      <section className="main">
        <h1>Alexgpt</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input type="text" placeholder="Message Alexgpt" />
            <img src={sendButton} class="submit" />
          </div>
          <div className="info">
            Alexgpt can make mistakes. We're improving and just trying to make
            your life easier and better
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
