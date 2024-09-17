import { Responses } from "../interfaces/chat.interfaces";

export const responses: Responses = {
  greetings: {
    pattern: /hello|hi|hey/,
    response: "Hello! How can I assist you today?",
  },
  help: {
    pattern: /help/,
    response: "Sure, I’m here to help. What do you need assistance with?",
  },
  gratitude: {
    pattern: /thank you|thanks/,
    response: "You're welcome! If you need more help, just ask.",
  },
  mood: {
    pattern: /how are you/,
    response: "I'm just a bot, but I'm doing well. How about you?",
  },
  nameQuery: {
    pattern: /what is your name/,
    response:
      "I'm a chatbot created to assist you. I don't have a name, but you can call me Bot.",
  },
  capabilities: {
    pattern: /what can you do/,
    response:
      "I can assist with various tasks and answer questions. Just let me know what you need!",
  },
  farewell: {
    pattern: /bye|goodbye/,
    response: "Goodbye! Have a great day!",
  },
  joke: {
    pattern: /joke/,
    response:
      "Why don't scientists trust atoms? Because they make up everything!",
  },
  recommendation: {
    pattern: /recommend/,
    response:
      "I can suggest various things! What kind of recommendation are you looking for?",
  },
  weather: {
    pattern: /weather/,
    response:
      "I can’t check the weather, but you can check a weather website or app for the latest updates.",
  },
  favorite: {
    pattern: /your favorite/,
    response:
      "I don't have personal preferences, but I'm here to help with whatever you need!",
  },
};
