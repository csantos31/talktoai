# Chat with DeepSeek or ChatGPT via OpenRouter

This project implements a chatbot in React that communicates with the **DeepSeek**  and **ChatGPT** AI model using the **OpenRouter** API.

## 🛠 Technologies Used

- **React** with Hooks
- **TypeScript**
- **OpenRouter API**
- **SCSS** for styling

## 🚀 Features

- Send messages to AI via OpenRouter.
- The user can choose AI ENGINE he chats with based on a toggle on the top of the screen
- Display responses from the model depending on selected service. 
  > At this point, it's cool that I applied the Dependency Inversion concept, so it's easy to add new IA services in the future

- Loading indicator while processing the response.
- Simple and intuitive interface.

## 📂 Project Structure

```
├── src/
│ ├── components/
│ │ ├── Chat/
│ │ │ ├── index.tsx
│ │ │ └── styles.scss
│ │ └── Menu/
│ │ ├── index.tsx
│ │ └── styles.scss
│ ├── data/
│ │ └── external-apis.json
│ ├── images/...
│ ├── interfaces/
│ │ ├── IApiServices.ts
│ │ └── IExternalApi.ts
│ ├── services/
│ │ ├── ChatGptServices/
│ │ └── DeepSeekServices/
│ ├── styles/global.scss
│ ├── App.tsx
│ ├── index.tsx
│ 
```

## 📦 Installation and Execution

1. Clone this repository:
   ```bash
   git clone https://github.com/csantos31/talktoai.git
   cd talktoai
   ```
2. Install dependencies:
   ```bash
   npm install  # or yarn install
   ```
3. Create a `.env` file in the project root and add your API key:
   ```env
   REACT_APP_IA_API_KEY=your-api-key-here
   ```
4. Run the project:
   ```bash
   npm start  # or yarn start
   ```

## 🔗 OpenRouter API Configuration

The project communicates with the OpenRouter API to retrieve AI responses. Make sure to:
- Have an account on OpenRouter.
- Generate a valid API key.
- Properly configure the `REACT_APP_IA_API_KEY` variable.

## 🖼️ Demo
### [🚀Visit the demo APP to check it🚀](https://talktoai-xi.vercel.app/)

![Chatbot Screenshot](https://raw.githubusercontent.com/csantos31/talktoai/refs/heads/main/public/screenshot.png)

## 📝 Future Improvements

- Enhance the interface with animations and visual feedback.
- Implement conversation history.

## 📜 License

This project is open-source and licensed under the **MIT License**. Feel free to contribute! 🚀

