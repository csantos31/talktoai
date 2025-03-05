import { IApiService } from "../interfaces/IApiService";

class DeepSeekService implements IApiService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async fetchResponse(message: string): Promise<string> {
    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
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
      );

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Error fetching response from OpenRouter with deepseek engine:", error);
      return "Error fetching response.";
    }
  }
}

export default DeepSeekService;
