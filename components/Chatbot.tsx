"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, stop, error } = useChat();

  const isLoading = status === "submitted" || status === "streaming";
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSafeSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!input || input.trim() === "") return;
    
    // Pass text directly to sendMessage for ai-sdk/react@3
    sendMessage({ text: input });
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSafeSubmit();
    }
  };

  // Helper to extract text from new UIMessage structure which uses `parts`
  const getMessageText = (m: any) => {
    if (m.content) return m.content;
    if (m.text) return m.text;
    if (m.parts && Array.isArray(m.parts)) {
      return m.parts.reduce((acc: string, part: any) => {
        if (part.type === 'text' || part.type === 'text-delta') {
          return acc + (part.text || part.delta || '');
        }
        return acc;
      }, '');
    }
    return '';
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[60] bg-[#D2042D] hover:bg-red-700 text-white w-16 h-16 rounded-full shadow-[0_0_20px_rgba(210,4,45,0.5)] flex items-center justify-center transition-all"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-8 z-[60] w-80 md:w-96 h-[500px] bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-[#D2042D] p-4 text-white font-bold flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" /></svg>
              Holocron Guide
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {messages.length === 0 ? (
                <div className="text-center text-gray-400 mt-10">
                  <p className="mb-2 text-[#007BFF] font-semibold">Welcome to the Archives!</p>
                  <p className="text-sm">Ask me anything about Shiv Prakash Singh's skills, experience, or projects.</p>
                </div>
              ) : (
                messages.map((m) => (
                  <div key={m.id} className={`max-w-[85%] rounded-2xl px-4 py-2 ${m.role === 'user' ? 'bg-[#007BFF] text-white self-end rounded-br-none' : 'bg-white/10 text-gray-200 self-start rounded-bl-none border border-white/5 whitespace-pre-wrap'}`}>
                    {getMessageText(m)}
                  </div>
                ))
              )}
              
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-3 rounded-lg text-sm">
                  <p className="font-bold">Error:</p>
                  <p>{error.message || "An unknown error occurred"}</p>
                </div>
              )}

              {isLoading && !error && (
                <div className="bg-white/10 text-gray-200 self-start rounded-2xl rounded-bl-none px-4 py-2 max-w-[85%]">
                  <span className="animate-pulse">Thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-white/10 bg-black/50 flex gap-2 items-center">
              <input
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#007BFF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isLoading ? "Thinking..." : "Ask a question..."}
                disabled={isLoading}
              />
              <button
                onClick={() => handleSafeSubmit()}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-[#007BFF] text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
