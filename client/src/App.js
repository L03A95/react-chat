import './App.css';
import { useEffect, useState } from 'react';
import {io} from 'socket.io-client'
import Login from './components/login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Chat from './components/chat';


const apiUrl = process.env.REACT_APP_API_URL;

const socket = io(apiUrl)
console.log('La API es ' + apiUrl)

function App() {

  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [chatMessages, setChatMessages] = useState([])

  const userInput = (user) => {
    setUsername(user)
  }

  const sendMessage = (msj) => {
    socket.emit('chat_message', {
      user: username, message: msj
    })
  }

  useEffect(() => {

    socket.on('chat_message', (data) => {
      setChatMessages(chatMessages => [...chatMessages,data])
    })

      if(!username) {navigate('/')} 

    return () => {
      socket.off('chat_message')
    }
  },[])

  

  return (
    <div className="App">
      <Routes>
        <Route path='/chat' element={ <Chat sendMessage={sendMessage}  chatMessages={chatMessages} socket={socket} user={username}/> } />
        <Route path='/' element={ <Login userInput={userInput} user={username}/>}/>
      </Routes>
      

    </div>
  );
}

export default App;
