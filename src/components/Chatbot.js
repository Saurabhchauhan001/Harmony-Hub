// src/components/Chatbot.js
import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Simulate bot response
    const botResponse = "I'm here to help you stay healthy!";
    setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Chat with Your Health Assistant
      </Typography>

      <Box sx={{ height: 200, overflowY: 'scroll', mb: 2, borderBottom: 1, borderColor: 'divider' }}>
        {messages.map((msg, index) => (
          <Typography key={index} align={msg.sender === 'user' ? 'right' : 'left'}>
            <strong>{msg.sender}:</strong> {msg.text}
          </Typography>
        ))}
      </Box>

      <TextField
        fullWidth
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        sx={{ mb: 1 }}
      />

      <Button variant="contained" onClick={handleSendMessage}>
        Send
      </Button>
    </Paper>
  );
}

export default Chatbot;
