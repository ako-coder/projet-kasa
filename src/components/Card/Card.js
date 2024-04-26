import { useNavigate } from 'react-router-dom'
import './Card.css'

function Card({property}) {
   
    let navigate = useNavigate()

    function handleClick() {
        navigate(`/fiche/${property.id}`, { state: { property }})
    }

    return(
    <div className='card-container' onClick={handleClick}>
        <p>{ property.title }</p>
        <div className='card-gradient'></div>
        <img src={ property.cover }></img>
    </div>
    )
}

export default Card