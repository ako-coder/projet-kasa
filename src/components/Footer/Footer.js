import FooterPic from "../../assets/footer_logo.png"
import './Footer.css'

function Footer() {
    return(
    <div className="footer-container">
        <img src={FooterPic} alt='logo Kasa'></img>
        <p><span>© 2020 Kasa. All</span> rights reserved</p>
    </div>
    )
}

export default Footer