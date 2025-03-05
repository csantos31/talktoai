import React, { useState } from "react";
import "./styles.scss";
import bot from "../../images/bot.jpg";

export function ChatComponent() {
  const [inputMessage, setInputMessage] = useState("");
  const [response, setResponse] = useState("");

  const [userQuestion, setUserQuestion] = useState("");
  const [hideChat, setHideChat] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

  const fetchIaData = async (message: string) => {
    const apiResponse = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization:
            `Bearer ${process.env.REACT_APP_IA_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1-distill-llama-70b:free",
          messages: [
            {
              role: "user",
              content: message,
            },
          ],
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => data.choices[0].message.content)
      .catch((err) => {
        console.log("UNEXPECTED ERROR", err);
      });

    return apiResponse;
  };

  const handleSendButtonClick = () => {
    setUserQuestion(inputMessage);
    setHideChat(false);
    setIsLoading(true);
    setShowTitle(false);
    setResponse("");

    fetchIaData(inputMessage).then((result) => {
      setResponse(result);
      setInputMessage("");
      setHideChat(false);
      setIsLoading(false);
    });
  };

  return (
    <>
      <div className="chat">
        <div className="image">
          <img src={bot} alt="Bot" />
        </div>
        {showTitle === true && <h1> Inicie a conversa </h1>};
        {isLoading === true && <div className="loading">...</div>}
        {!hideChat && (
          <div className="chat-container">
            <div className="message user-message">{userQuestion}</div>
            <div className="message bot-message">{response}</div>
          </div>
        )}
        <input
          name="message"
          value={inputMessage}
          placeholder="No que está pensando..."
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={handleSendButtonClick}>Enviar</button>
      </div>
    </>
  );
}

export const Chat = React.memo(ChatComponent);
