"use client";

import React, { useState, useEffect, useRef } from "react";
import axiosInstance from "@/lib/axios";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import ReactMarkdown from "react-markdown";

type Message = {
  sender: "user" | "bot";
  text: string;
  time: string;
};

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const optionsRef = useRef<HTMLDivElement | null>(null);

  const getCurrentTime = (): string => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleSendMessage = async (message: string) => {
    if (message.trim()) {
      const time = getCurrentTime();
      const newMessages: Message[] = [
        ...messages,
        { sender: "user", text: message, time },
      ];
      setMessages(newMessages);
      setInput("");
      setShowOptions(false);

      try {
        setIsTyping(true);

        const response = await axiosInstance.post("/message", {
          message,
        });

        const botMessage = response.data.response;

        setMessages([
          ...newMessages,
          { sender: "bot", text: botMessage, time: getCurrentTime() },
        ]);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsTyping(false);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim()) {
      handleSendMessage(input);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleOptionClick = (option: string) => {
    setInput(option);
    handleSendMessage(option);
    setShowOptions(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const initialMessage: Message = {
      sender: "bot",
      text: "Halo! 👋 Saya adalah Asisten Virtual yang siap membantu belajar tentang Sistem Komputer pada mata pelajaran Informatika tingkat SMP khususnya kelas 10. Apa yang bisa saya bantu?",
      time: getCurrentTime(),
    };

    setMessages([initialMessage]);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex items-center justify-between p-4 bg-blue-500 text-white">
        <button onClick={handleGoBack} className="p-2">
          <IoArrowBack className="w-6 h-6" />
        </button>
        <div className="text-lg font-semibold">Chatbot</div>
        <div className="w-6 h-6" />
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 p-2 bg-white border-t border-b rounded-lg shadow-lg">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "bot" ? "justify-start" : "justify-end"
            }`}
          >
            <div className="flex items-start space-x-2">
              <div
                className={`flex items-start ${
                  msg.sender === "user" ? "order-last" : ""
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <Image
                    src="/images/bot.png"
                    alt="Avatar"
                    width={32}
                    height={32}
                    className="w-full h-full rounded-full"
                  />
                </div>
              </div>

              <div
                className={`p-2 rounded-lg max-w-3xl ${
                  msg.sender === "bot"
                    ? "bg-gray-300 text-black"
                    : "bg-blue-500 text-white"
                }`}
              >
                <div className="prose max-w-full text-sm">
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="p-2 rounded-lg max-w-xs bg-gray-300 text-gray-700">
              <span className="animate-pulse">...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {showOptions && (
        <div
          ref={optionsRef}
          className="p-4 space-y-2 bg-gray-200 rounded-lg shadow-lg absolute bottom-24 left-1/2 transform -translate-x-1/2 w-[80%]"
        >
          {[
            "Apa itu Sistem Operasi?",
            "Apa itu Sistem Bilangan?",
            "Apa itu Bilangan Binner?",
            "Apa itu Software?",
            "Apa itu Hardware?",
          ].map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className="flex items-center space-x-2 w-full p-3 bg-white rounded-lg shadow hover:bg-gray-300"
            >
              <FaQuestionCircle className="w-5 h-5 text-blue-500" />
              <span>{option}</span>
            </button>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center space-x-2 p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={() => setShowOptions(!showOptions)}
          className="p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none"
        >
          <MdOutlineDashboard className="w-6 h-6" />
        </button>

        <button
          onClick={() => handleSendMessage(input)}
          className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
