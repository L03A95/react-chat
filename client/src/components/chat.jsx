import { useState, useEffect } from "react"
import '../styles/chat.css'



export default function Chat ({sendMessage, chatMessages,socket, user}) {

        const[users, setUsers] = useState([])

        

           const handleUnload = () => {
            socket.emit('disconected', {
                    user: user
                })
            }

            const handleConnect = () => {
                if(user){
                socket.emit('connected', {
                    user: user
                    })
                }
            }

        useEffect(() => {
            

            socket.on('connected', (data) => {
                setUsers(data.users)
            })
          
            socket.on('disconected', (data) => {
                setUsers(data.users)
            })

           window.addEventListener('beforeunload', handleUnload);
        
            return () => {
                handleConnect()
                socket.off('connected')
                socket.off('disconected')
            }
        },[])

        const [message, setMessage] = useState('')


        const buttonHandler = (e) => {
            e.preventDefault()
            if(!message) return
            sendMessage(message)
            setMessage('')
        }

        const messageHandler = (msj) => {
            setMessage(msj)
        }

    return (
        <main className="chat_container">
            <div className="chat_wrapper">
                <div className="chat">
                    {chatMessages.map((m,i) => 
                        <div className={ m.user == user ? "message_wrapper self" :"message_wrapper"} key={i}>
                            { m.user == user ? null : <span className="user_name">{m.user}</span>}
                            <span className="user_message">{m.message}</span>
                        </div>)}
                </div>
                <form className="msg_form">
                    <input placeholder="Type a message" className="msg_input" onChange={(e) => messageHandler(e.target.value)} value={message}></input>
                    <button className="msg_btn" onClick={(e) => buttonHandler(e)}>{">"}</button> 
                </form>
            </div>
            <aside className="users-list_wrapper">
                <h3 className="user-list_title">Online users</h3>
                {users?.map((user, i) => <h5 className="user-list" key={i}>🟢 {user}</h5>)}
            </aside>
            
        </main>
    )
}