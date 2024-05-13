import './Stars.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons';

function Stars({rating}) {

    const starElements = []

    for (let i = 0; i < 5; i++){
        const key = `star-${i}-${rating}`
        if (i < parseInt(rating, 10)) {
            starElements.push(<div className='red-star' key={key}><FontAwesomeIcon icon={faStar} /></div>)
        } else {
            starElements.push(<div className='grey-star' key={key}><FontAwesomeIcon icon={faStar} /></div>)
        }
         
    }

    return(
    <div className='stars-container'>
        {starElements}       
    </div>
    )
}

export default Stars
