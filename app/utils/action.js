"use server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
export const generateChatResponse = async (chatMessages) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "you are a helpful assistant" },
        ...chatMessages,
      ],
      temperature: 1,
      max_tokens: 30,
    });
    return response.choices[0].message;
  } catch (error) {
    return null;
  }
};
