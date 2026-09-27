import { useState } from "react";
import "./App.css";

function App() {
  const [aiModel, setAiModel] = useState("claudeHaiku");
  const [userMessage, setUserMessage] = useState("");

  async function handleSendMessage() {
    const url = `http://127.0.0.1:8000/chat?${new URLSearchParams({
      query: userMessage,
      model: aiModel,
    })}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
  }

  return (
    <>
      <h1>Chat with AI</h1>
      <div className="model-selection">
        Select your model
        <div>
          <select
            name="models"
            id="model"
            value={aiModel}
            onChange={(event) => {
              setAiModel(event.target.value);
            }}
          >
            Model
            <option value="claudeHaiku">Claude Haiku</option>
            <option value="claudeSonnet">Claude Sonnet 5</option>
            <option value="claudeOpus">Claude Opus</option>
          </select>
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Ask something"
          value={userMessage}
          onChange={(event) => {
            setUserMessage(event.target.value);
          }}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </>
  );
}

export default App;
