import { Link } from "react-router-dom";




export default function Login ({userInput}) {



    return (
        <>
            <h2>Ingresa tu nombre de usuario</h2>
            <input onChange={(e) => userInput(e.target.value)}></input>
            <Link to='/chat'><button>Entrar</button></Link>
        </>
    )
}