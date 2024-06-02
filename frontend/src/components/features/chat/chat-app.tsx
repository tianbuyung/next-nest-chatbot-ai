"use client";

import { useState } from "react";

import { createChatCompletion } from "@/data/actions/create-chat-completion";
import { ChatWindow } from "./chat-window";
import { ChatForm } from "./chat-form";
import { ModeToggle } from "@/components/themes/mode-toggle";

export function ChatApp() {
  const [messages, setMessages] = useState<ChatCompletionMessage[]>([]);
  const [message, setMessage] = useState("");

  const handleSendMessage = async (message: string) => {
    const updatedMessages = [
      ...messages,
      {
        role: "user",
        content: message,
      },
    ];
    setMessages(updatedMessages);
    setMessage("");

    const response = (await createChatCompletion(updatedMessages)).choices[0]
      ?.message;
    if (response) {
      setMessages([...updatedMessages, response]);
    }
  };

  return (
    <main className="h-screen flex items-center justify-center flex-col gap-10 container mx-auto px-4 pt-6">
      <ModeToggle />

      <ChatWindow messages={messages} />

      <ChatForm
        onSendMessage={handleSendMessage}
        message={message}
        setMessage={setMessage}
      />
    </main>
  );
}
