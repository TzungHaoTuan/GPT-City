"use client";
import { useState } from "react";
const ChatPage = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    e.preventdefault;
    setInput(e.target.value);
  };
  const addMessages = (e) => {
    e.preventdefault;
    setMessages((prevMessages) => [...prevMessages, input]);
    setInput("");
  };
  return (
    <>
      <h2>messages</h2>
      <form action={addMessages}>
        <input type="text" onChange={handleInputChange} value={input} />
        <button type="submit">send</button>
      </form>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </>
  );
  //   A 'messages' header using an <h2> element.
  // A <form> element for composing and sending messages.
  // Inside the form:
  // An <input> element for entering messages, with event handling to update the text state.
  // A 'Send' button to submit messages.
  // This component represents a chat interface where users can send messages. It uses React state to manage the input text and a list of messages. When a message is submitted, it prevents the default form behavior (form submission) and handles message composition.
};
export default ChatPage;
