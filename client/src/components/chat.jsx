import { useState, useEffect } from "react"
import '../styles/chat.css'



export default function Chat ({sendMessage, chatMessages,socket, user}) {

        

        useEffect(() => {
        socket.emit('connected', {
            user: user
        })
        },[])

        const [message, setMessage] = useState('')


        const buttonHandler = () => {
            if(!message) return
            sendMessage(message)
            setMessage('')
        }

        const messageHandler = (msj) => {
            setMessage(msj)
        }

    return (
        <>
        <div className="chat_wrapper">
            <div className="chat">
                {chatMessages.map(m => 
                    <div className={ m.user == user ? "message_wrapper self" :"message_wrapper"}>
                        { m.user == user ? null : <span className="user_name">{m.user} - </span>}
                        <span className="user_message">{m.message}</span>
                    </div>)}
            </div>
            <input placeholder="Escribe tu mensaje" onChange={(e) => messageHandler(e.target.value)} value={message}></input>
            <button onClick={() => buttonHandler()}>Enviar mensaje</button>
        </div>
            
        </>
    )
}