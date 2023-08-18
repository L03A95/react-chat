import './App.css';
import { useEffect, useState } from 'react';
import {io} from 'socket.io-client'
import Login from './components/login';
import { Route, Routes } from 'react-router-dom';
import Chat from './components/chat';

//asda

const socket = io('http://192.168.1.39:3001')

function App() {

  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([])

  const userInput = (user) => {
    setUsername(user)
  }

  const messageInput = (mensaje) => {
    setMessage(mensaje)
  }

  const sendMessage = () => {
    socket.emit('chat_message', {
      user: username, message: message
    })
  }

  useEffect(() => {

    socket.on('chat_message', (data) => {
      setChatMessages(chatMessages => [...chatMessages,data])
    })

    return () => {
      socket.off('chat_message')
    }
  },[])

  return (
    <div className="App">
      <h1>Chat de la salada</h1>
      <Routes>
        <Route path='/chat' element={ <Chat messageInput={messageInput} sendMessage={sendMessage}  chatMessages={chatMessages} socket={socket} user={username}/> } />
        <Route path='/' element={ <Login userInput={userInput} />}/>
      </Routes>
      

    </div>
  );
}

export default App;
