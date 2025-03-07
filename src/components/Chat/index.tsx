import React, { useEffect, useState } from "react";
import "./styles.scss";
import bot from "../../images/bot.jpg";

import { IApiService } from "../../interfaces/IApiService";

interface ChatComponentProps {
  apiService: IApiService;
  selectedApi: any;
}

export function ChatComponent({ apiService, selectedApi }: ChatComponentProps) {
  const [inputMessage, setInputMessage] = useState("");
  const [response, setResponse] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [hideChat, setHideChat] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

  const fetchIaData = async (message: string) => {
    const apiResponse = await apiService
      .fetchResponse(message)
      .then((res) => res)
      .catch((err) => {
        console.log("UNEXPECTED ERROR", err);
      });

    return apiResponse;
  };

  const processMessage = () => {
    const message = inputMessage || userQuestion;

    setUserQuestion(message);
    setHideChat(false);
    setIsLoading(true);
    setShowTitle(false);
    setResponse("");
    setInputMessage("");

    fetchIaData(message).then((result) => {
      setResponse(result || "Erro processando os dados");
      setHideChat(false);
      setIsLoading(false);
    });
  };

  const handleSendButtonClick = () => {
    console.log("clicking");
    if (inputMessage !== "") processMessage();
  };

  useEffect(() => {
    if (userQuestion !== "") {
      processMessage();
    }
  }, [selectedApi]);

  return (
    <>
      <div className="chat">
        <div className="image">
          <img src={bot} alt="Bot" />
        </div>
        {showTitle === true && <h1> Inicie a conversa com {selectedApi} </h1>};
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
