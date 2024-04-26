import { useLocation } from "react-router-dom"
import Carousel from "../components/Carousel/Carousel"

function Fiche() {
    const location = useLocation()
    const property = location.state.property
    
    return(<div>
        <Carousel images={property.pictures} />
    </div>) 
}

export default Fiche