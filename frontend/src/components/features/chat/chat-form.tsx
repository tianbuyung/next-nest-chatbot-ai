"use client";

import { ChangeEvent, KeyboardEvent } from "react";

export function ChatForm({
  onSendMessage,
  message,
  setMessage,
}: {
  onSendMessage: (message: string) => Promise<void>;
  message: string;
  setMessage: (message: string) => void;
}) {
  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleMessageKeyDown = async (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      await handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if (message.trim() === "") return;
    await onSendMessage(message);
  };

  return (
    <input
      type="text"
      placeholder="Message"
      className="input input-bordered w-full m-10"
      value={message}
      onChange={handleMessageChange}
      onKeyDown={handleMessageKeyDown}
    />
  );
}
