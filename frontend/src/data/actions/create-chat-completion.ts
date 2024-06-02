"use server";

import { getBackendURL } from "@/lib/utils";

export async function createChatCompletion(messages: ChatCompletionMessage[]) {
  const response = await fetch(`${getBackendURL()}/openai/chat-completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages,
    }),
  });

  return response.json();
}
