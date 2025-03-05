import { useEffect, useState } from "react";
import { Chat } from "./components/Chat";
import "./styles/global.scss";
import DeepSeekService from "./services/DeepSeekService";
import ChatGptService from "./services/ChatGptService";
import { Menu } from "./components/Menu";
import externalApis from "./data/external-apis.json";
import { IExternalApi } from "./interfaces/IExternalApi";

function App() {
  const [selectedApi, setSelectedApi] = useState<string>("");
  const [availableApis, setAvailableApis] = useState<IExternalApi[]>([]);

  useEffect(() => {
    setAvailableApis(externalApis.data);
    const fetchedApis = externalApis.data.map(
      (item: IExternalApi) => item.identifier
    );

    setSelectedApi(fetchedApis[0]);
  }, []);

  const apiService =
    //IT's the same URL but it may change depending on API Service
    selectedApi === "deepseek"
      ? new DeepSeekService(process.env.REACT_APP_IA_API_KEY || "")
      : new ChatGptService(process.env.REACT_APP_IA_API_KEY || "");

  return (
    <div className="App">
      <Menu
        setSelectedApi={setSelectedApi}
        selectedItem={selectedApi}
        availableApis={availableApis}
      />
      <Chat apiService={apiService} selectedApi={selectedApi} />
    </div>
  );
}

export default App;
