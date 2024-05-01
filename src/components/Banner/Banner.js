import "./Banner.css"

function Banner({image, text}) {
    return(
    <div className="banner-container">
        <h1 dangerouslySetInnerHTML={{__html: text}}></h1>
        <img src={image}></img>
    </div>
    )
}

export default Banner