
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotResponse {
  response: string;
  suggestions?: string[];
}

// Mock API call for chatbot
const sendChatMessage = async (message: string): Promise<ChatbotResponse> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simple mock responses
  const responses = [
    "Thank you for your question! I'd be happy to help you with information about the INTA Event 2028.",
    "That's a great question! Let me provide you with the details you need.",
    "I can help you with registration, speakers, agenda, and venue information.",
  ];
  
  return {
    response: responses[Math.floor(Math.random() * responses.length)],
    suggestions: [
      "Tell me about the speakers",
      "What's included in registration?",
      "Show me the agenda"
    ]
  };
};

export const useChatbot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hi! I'm your INTA Event assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const chatMutation = useMutation({
    mutationFn: sendChatMessage,
    onSuccess: (data, variables) => {
      // Add user message
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        text: variables,
        sender: 'user',
        timestamp: new Date()
      };

      // Add bot response
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage, botMessage]);
    }
  });

  const sendMessage = (message: string) => {
    if (message.trim()) {
      chatMutation.mutate(message);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        text: "Hi! I'm your INTA Event assistant. How can I help you today?",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  };

  return {
    messages,
    sendMessage,
    clearChat,
    isLoading: chatMutation.isPending
  };
};
