# My Chatbot Component

A React Chatbot component styled with Tailwind CSS for easy customization and animated with Framer Motion for smooth interactions.

## Features

- Fully customizable with Tailwind CSS classes.
- Smooth animations thanks to Framer Motion.
- Simple API for sending and receiving messages.

## Installation

Install the component using npm:

```bash
npm install npm-chatbot-challenge
Usage
Import and use the component in your React application:

```jsx
import React from 'react';
import ChatBot from 'npm-chatbot-challenge';


function App() {
  return (
    <div className="App">
      <ChatBot greetingMessage="Hello, how can I assist you?" />
    </div>
  );
}

export default App;
```
Props
Here are some of the props that ChatBot accepts:

greetingMessage: The initial message displayed by the ChatBot.
position: Where on the screen the ChatBot should be positioned. Options include 'bottom-right', 'bottom-left', 'top-right', 'top-left'.

Peer Dependencies
Make sure these packages are installed in your project:
react and react-dom version 17 or higher
framer-motion version 4 or higher




License
This project is licensed under the MIT License - see the LICENSE.md file for details.