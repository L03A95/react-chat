import { Link } from "react-router-dom";
import '../styles/login.css'



export default function Login ({userInput, user}) {


    return (
        <>
            <h1  className="chat_title">Live chat</h1>
            <span className="login_span">Enter your username</span>
            <input onChange={(e) => userInput(e.target.value)} className="login_input"/>
            <Link to={ user.length > 3 && user.length < 20 ? '/chat' : '/'}><button className="login_btn">Enter</button></Link>
        </>
    )
}