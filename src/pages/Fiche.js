import { useLocation } from "react-router-dom"
import Carousel from "../components/Carousel/Carousel"
import Tag from "../components/Tag/Tag"
import './Fiche.css'
import Stars from '../components/Stars/Stars'
import Dropdown from "../components/Dropdown/Dropdown"
import Host from "../components/Host/Host"
import Title from "../components/Title/Title"
import NotFound from "./NotFound"

function Fiche() {
    const location = useLocation()

    if(location.state === null) {
        return <NotFound />
    }

    const property = location.state.property  

    return(<div className="fiche-container">
        <Carousel images={property.pictures} />
        <div className="title-host-container">
            <div>
                <Title property={property} />
            </div>
            <div>
                <Host property={property} />
            </div>
        </div>        
        <div className="tags-stars-container">
            <div className="tags-container">
                {property.tags.map((tag, index)=>(
                    <Tag key={`${index}-${tag}`} title={tag}/>
                ))}
            </div>
            <Stars rating={property.rating} />            
        </div>

        {/* ---- Mobile ---- */}

                <div className="title-tags-container">
                    <Title property={property} />
                    <div className="tags-container">
                        {property.tags.map((tag, index)=>(
                            <Tag key={`${index}-${tag}`} title={tag}/>
                        ))}
                    </div>
                </div>
                <div className="stars-host-container">
                    <Stars rating={property.rating} />                    
                    <Host property={property} />                    
                </div>

        {/* ---- Fin de Mobile ---- */}

        <div className="container-fiche-dropdowns">
            <Dropdown title={"Description"} options={[property.description]} />
            <Dropdown title={"Équipements"} options={property.equipments || []} /> 
        </div>                 
    </div>)
}

/* TODO div avec photo + nom proprio / nom de l'annonce / div stars (trouver dans property) */

export default Fiche