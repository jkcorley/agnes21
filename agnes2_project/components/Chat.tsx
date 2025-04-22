'use client';
import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState<
    { from: 'user' | 'agnes'; text: string }[]
  >([]);
  const [input, setInput] = useState('');

  async function sendMessage() {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
    const res = await fetch('/api/agent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 'user-1', message: input }),
    });
    const data = await res.json();
    setMessages((prev) => [...prev, { from: 'agnes', text: data.text }]);
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={m.from === 'user' ? 'text-right' : 'text-left'}>
            <div className="inline-block bg-gray-200 rounded p-2">
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t flex">
        <input
          className="flex-1 border rounded p-2 mr-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button className="bg-blue-500 text-white p-2 rounded" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
