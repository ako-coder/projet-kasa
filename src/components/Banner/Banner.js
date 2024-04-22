import BannerPic from "../../assets/banner.png"

function Banner() {
    return(
    <div className="banner-container">
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={BannerPic}></img>
    </div>
    )
}

export default Banner