import { NavLink } from "react-router-dom"
import HeaderPic from "../../assets/logo.png"
import './Header.css'

function Header() {
    return(
    <div className="header-container">
        <img className="logo" src={HeaderPic} alt='logo Kasa'></img>        
        <nav className="header-links">
            <NavLink to="/" style={({ isActive }) => isActive ? { textDecoration:"underline" } : null}>Accueil</NavLink>
            <NavLink to="/a-propos" style={({ isActive }) => isActive ? { textDecoration:"underline" } : null}>A propos</NavLink>
        </nav>                
    </div>
    )
}

export default Header