"use client"

import { useState, useRef } from "react";

const GEMINI_API_KEY = "AIzaSyAWA5nNBKWqAxhypWpOVw05r6I807M9EmI";

async function fetchGeminiResponse(messages: {role: string, content: string}[]) {
  const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" + GEMINI_API_KEY, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: messages.map(m => ({ role: m.role, parts: [{ text: m.content }] }))
    })
  });
  if (!res.ok) {
    const errorText = await res.text();
    console.error("Gemini API error:", res.status, errorText);
    return "Sorry, I couldn't reach the AI service (" + res.status + ")";
  }
  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "model", content: "Hi! I'm the Walmart Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      // Only send user messages to Gemini API
      const userMessages = newMessages.filter(m => m.role === "user");
      const reply = await fetchGeminiResponse(userMessages);
      setMessages([...newMessages, { role: "model", content: reply }]);
    } catch {
      setMessages([...newMessages, { role: "model", content: "Sorry, something went wrong." }]);
    }
    setLoading(false);
    setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50 }}>
      {!open && (
        <button
          aria-label="Open chatbot"
          onClick={() => setOpen(true)}
          className="shadow-lg rounded-full bg-walmart p-4 hover:bg-walmart/80 transition-all flex items-center justify-center"
        >
          <svg width="32" height="32" fill="white" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><text x="12" y="17" textAnchor="middle" fontSize="12" fill="#004F9A">AI</text></svg>
        </button>
      )}
      {open && (
        <div className="w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden animate-fade-in border border-gray-200">
          <div className="flex items-center justify-between bg-walmart text-white px-4 py-2">
            <span className="font-bold">Walmart Assistant</span>
            <button onClick={() => setOpen(false)} aria-label="Close chatbot" className="text-white hover:text-gray-200">×</button>
          </div>
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`rounded-lg px-3 py-2 max-w-[80%] text-sm ${msg.role === "user" ? "bg-walmart text-white" : "bg-gray-200 text-gray-900"}`}>{msg.content}</div>
              </div>
            ))}
            {loading && <div className="text-xs text-gray-400">Thinking...</div>}
            <div ref={messagesEndRef} />
          </div>
          <form
            className="flex items-center border-t border-gray-200 p-2 bg-white"
            onSubmit={e => { e.preventDefault(); handleSend(); }}
          >
            <input
              className="flex-1 px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-walmart text-sm"
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={loading}
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 rounded-full bg-walmart text-white font-bold hover:bg-walmart/80 transition-all disabled:opacity-50"
              disabled={loading || !input.trim()}
            >
              Send
            </button>
          </form>
        </div>
      )}
      <style jsx global>{`
        @keyframes animate-fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: animate-fade-in 0.3s cubic-bezier(.4,0,.2,1); }
      `}</style>
    </div>
  );
} 