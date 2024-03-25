import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <section className="side-bar">
        <button className="new-chat"> + New Chat</button>
        <ul className="history"></ul>
        <nav>
          <p>made by Alex</p>
        </nav>
      </section>
      <section className="main">
        <h1>Alexgpt</h1>
        <ul className="feed"></ul>
        <div className="bottom-section"></div>
        <div className="input-container">
          <input type="text" />
          <div id="submit">&gt;</div>
        </div>
        <div className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minima
          est blanditiis nam eum? Recusandae eos delectus excepturi nesciunt,
          saepe temporibus doloribus quam fugit quisquam!
        </div>
      </section>
    </div>
  );
}

export default App;
