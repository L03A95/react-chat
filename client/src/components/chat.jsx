import { useEffect } from "react"



export default function Chat ({messageInput, sendMessage, chatMessages,socket, user}) {

        socket.emit('connected', {
            user: user
        })


    return (
        <>
            <h2>Este es el chat</h2>
            <div>
                {chatMessages.map(m => 
                    <div>
                        <hr></hr>
                        <b>{m.user} - </b>
                        <b>{m.message}</b>
                    </div>)}
            </div>
            <input placeholder="Escribe tu mensaje" onChange={(e) => messageInput(e.target.value)}></input>
            <button onClick={() => sendMessage()}>Enviar mensaje</button>
        </>
    )
}