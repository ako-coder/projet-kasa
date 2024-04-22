import FooterPic from "../../assets/footer_logo.png"
import './Footer.css'

function Footer() {
    return(
    <div className="footer-container">
        <img src={FooterPic}></img>
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
    )
}

export default Footer