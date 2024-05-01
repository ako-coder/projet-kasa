import './Stars.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons';

function Stars({rating}) {

    const starElements = []

    for (let i = 0; i < 5; i++){
        if (i < parseInt(rating, 10)) {
            starElements.push(<div className='red-star'><FontAwesomeIcon icon={faStar} /></div>)
        } else {
            starElements.push(<div className='grey-star'><FontAwesomeIcon icon={faStar} /></div>)
        }
         
    }

    return(
    <div className='stars-container'>
        {starElements}       
    </div>
    )
}

export default Stars