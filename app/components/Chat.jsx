"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import {
  generateChatResponse,
  fetchUserTokensById,
  subtractTokens,
} from "@/app/utils/action";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { SiOpenaigym } from "react-icons/si";
import { useAuth } from "@clerk/nextjs";

const Chat = () => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const { userId } = useAuth();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      try {
        const currentTokens = await fetchUserTokensById(userId);

        if (currentTokens < 100) {
          toast.error("Token balance too low....");
          return;
        }

        const response = await generateChatResponse(messages);

        if (!response) {
          toast.error("Something went wrong...");
          return;
        }
        setMessages((prev) => [...prev, response.message]);
        const newTokens = await subtractTokens(userId, response.tokens);
        toast.success(`${newTokens} tokens remaining...`);
      } catch (error) {
        toast.error(error);
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = { role: "user", content: newMessage };
    setMessages((prev) => [...prev, query]);
    setNewMessage("");
    mutate();
  };

  const handleNewMessage = (e) => {
    e.preventDefault();
    setNewMessage(e.target.value);
  };

  return (
    <div className="flex flex-col h-screen px-16 py-12 pb-24 relative">
      <div className="flex-grow overflow-y-auto">
        {messages.map(({ role, content }, index) => {
          const avatar =
            role === "user" ? (
              <FaUser className="w-4 h-4 mt-5" />
            ) : (
              <SiOpenaigym className="w-4 h-4 mt-5 text-accent" />
            );
          const bgColor =
            role === "user"
              ? "border-[0.1px] border-neutral-500"
              : "bg-neutral-content border border-secondary";
          return (
            <div key={index} className="flex items-start gap-4 mb-4">
              <span>{avatar}</span>
              <div className={`${bgColor} p-4 rounded-lg`}>
                <p className="whitespace-pre-line">{content}</p>
              </div>
            </div>
          );
        })}
        {isPending && messages.length % 2 !== 0 && (
          <div className="flex items-start gap-4 mt-4">
            <SiOpenaigym className="w-4 h-4 mt-5 text-accent" />
            <div className="flex justify-center items-center bg-neutral-content border border-secondary p-4 rounded-lg max-w-2xl">
              <span className="loading loading-dots loading-md text-accent" />
            </div>
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="absolute bottom-12 w-[calc(100%-128px)]"
      >
        <div className="join w-full">
          <input
            type="text"
            className="join-item input input-bordered border-secondary w-full"
            placeholder="What you want to know?"
            value={newMessage}
            onChange={handleNewMessage}
          />
          <button
            className="join-item btn btn-secondary normal-case"
            disabled={isPending}
          >
            {isPending ? "please wait..." : "Ask question"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Chat;
