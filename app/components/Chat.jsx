"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { generateChatResponse } from "../utils/action";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { SiOpenaigym } from "react-icons/si";

const Chat = () => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const { mutate, isPending } = useMutation({
    // mutationFn: (query) => generateChatResponse(query),
    mutationFn: (query) => generateChatResponse([...messages, query]),
    onSuccess: (data) => {
      if (!data) {
        toast.error("Something went wrong...");
        return;
      }
      setMessages((prev) => [...prev, data]);
    },
    onError: (error) => {
      toast.error("Something went wrong...");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = { role: "user", content: newMessage };
    mutate(query);
    setMessages((prev) => [...prev, query]);
    setNewMessage("");
  };

  const handleNewMessage = (e) => {
    setNewMessage(e.target.value);
  };
  console.log(messages);
  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
      <div className="min-h-full">
        {messages.map(({ role, content }, index) => {
          const avatar =
            role === "user" ? (
              <FaUser className="w-4 h-4 mt-5" />
            ) : (
              <SiOpenaigym className="w-4 h-4 mt-5" />
            );
          const bgColor = role === "user" ? "bg-neutral-800" : "bg-neutral-900";
          return (
            <div key={index} className="flex items-start gap-4 mt-4">
              {avatar}
              <div className={`${bgColor} p-4 rounded-lg max-w-2xl`}>
                <p className="">{content}</p>
              </div>
            </div>
          );
        })}
        {isPending && (
          <div className="flex items-start gap-4 mt-4">
            <SiOpenaigym className="w-4 h-4 mt-5" />
            <div className="flex justify-center items-center bg-neutral-900 p-4 rounded-lg max-w-2xl">
              {""}
              <span className="loading loading-dots loading-md" />
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="max-w-3xl">
        <div className="join w-full">
          <input
            type="text"
            className="join-item input input-bordered w-full"
            placeholder="What you want to know?"
            value={newMessage}
            onChange={handleNewMessage}
          />
          <button className="join-item btn btn-secondary" disabled={isPending}>
            {isPending ? "please wait..." : "ask question"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Chat;
