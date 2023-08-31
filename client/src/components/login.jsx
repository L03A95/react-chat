import { Link } from "react-router-dom";
import '../styles/login.css'



export default function Login ({userInput, user}) {


    return (
        <div>
            <h1  className="chat_title">Live chat</h1>
            <h2 className="chat_subtitle">Comunicate with people!</h2>
            <form>
                <input onChange={(e) => userInput(e.target.value)} className="login_input" placeholder="Type your username"/>
                <Link to={ user.length > 3 && user.length < 20 ? '/chat' : '/'}><button className="login_btn">Enter</button></Link>
            </form>
            
        </div>
    )
}