import { useLocation } from "react-router-dom"
import Carousel from "../components/Carousel/Carousel"
import Tag from "../components/Tag/Tag"
import './Fiche.css'
import Stars from '../components/Stars/Stars'

function Fiche() {
    const location = useLocation()
    const property = location.state.property
    
    return(<div>
        <Carousel images={property.pictures} />
        <div className="tags-container">
            {property.tags.map((tag, index)=>(
                <Tag key={`${index}-${tag}`} title={tag}/>
            ))}
        </div>
        <Stars rating={property.rating} />               
    </div>) 
}

/* TODO div avec photo + nom proprio / nom de l'annonce / div stars (trouver dans property) */

export default Fiche