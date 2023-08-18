import { Link } from "react-router-dom";




export default function Login ({userInput, user}) {


    return (
        <>
            <h2>Ingresa tu nombre de usuario</h2>
            <input onChange={(e) => userInput(e.target.value)}></input>
            <Link to={ user.length > 3 && user.length < 20 ? '/chat' : '/'}><button>Entrar</button></Link>
        </>
    )
}