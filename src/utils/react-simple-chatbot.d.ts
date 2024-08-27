// src/types/react-simple-chatbot.d.ts o src/react-simple-chatbot.d.ts
declare module 'react-simple-chatbot' {
    import { ComponentType } from 'react';
  
    interface Step {
      id: string;
      message?: string;
      trigger?: string;
      options?: { value: string; label: string; trigger: string }[];
      end?: boolean;
    }
  
    interface ChatBotProps {
      steps: Step[];
    }
  
    const ChatBot: ComponentType<ChatBotProps>;
  
    export default ChatBot;
  }
  