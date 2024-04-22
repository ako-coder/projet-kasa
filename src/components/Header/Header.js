import HeaderPic from "../../assets/logo.png"
import './Header.css'

function Header() {
    return(
    <div className="header-container">
        <img src={HeaderPic}></img>
        <div className="header-links">
            <a href="">Accueil</a> <a href="">A propos</a>
        </div>        
    </div>
    )
}

export default Header