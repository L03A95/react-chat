import { Link } from "react-router-dom";
import '../styles/login.css'



export default function Login ({userInput, user}) {


    return (
        <>
            <h2 className="login_title">Ingresa tu nombre de usuario</h2>
            <input onChange={(e) => userInput(e.target.value)} className="login_input"/>
            <Link to={ user.length > 3 && user.length < 20 ? '/chat' : '/'}><button className="login_btn">Entrar</button></Link>
        </>
    )
}