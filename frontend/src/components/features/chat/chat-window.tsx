export function ChatWindow({
  messages,
}: {
  messages: ChatCompletionMessage[];
}) {
  return (
    <section className="flex flex-col gap-3 h-[75%] overflow-scroll w-full">
      {messages.map((message, index) => (
        <div
          key={index}
          className={
            message.role === "user" ? "chat chat-start" : "chat chat-end"
          }
        >
          <div className="chat-bubble">
            <p>{message.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
