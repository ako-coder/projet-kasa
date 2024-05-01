import { NavLink } from "react-router-dom"
import './NotFound.css'

function NotFound() {
    return(<div className="notfound-container">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>        
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </div>) 
}

export default NotFound