import './Card.css'

function Card({title, image}) {
    return(
    <div className='card-container'>
        <p>{ title }</p>
        <div className='card-gradient'></div>
        <img src={ image }></img>
    </div>
    )
}

export default Card