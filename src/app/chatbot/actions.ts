"use server";

import { chatbotAssistant, type ChatbotAssistantInput } from "@/ai/flows/chatbot-assistant";

export async function getChatbotResponse(input: ChatbotAssistantInput): Promise<string> {
  try {
    const result = await chatbotAssistant(input);
    return result.answer;
  } catch (error) {
    console.error("Error in chatbot assistant:", error);
    return "I'm sorry, I encountered an error and couldn't process your request. Please try again later.";
  }
}
