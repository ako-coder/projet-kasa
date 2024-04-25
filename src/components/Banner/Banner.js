import "./Banner.css"

function Banner({image}) {
    return(
    <div className="banner-container">
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={image}></img>
    </div>
    )
}

export default Banner