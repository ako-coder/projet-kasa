import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Carousel from "../components/Carousel/Carousel"
import Tag from "../components/Tag/Tag"
import './Fiche.css'
import Stars from '../components/Stars/Stars'
import Dropdown from "../components/Dropdown/Dropdown"
import Host from "../components/Host/Host"
import Title from "../components/Title/Title"
import NotFound from "./NotFound"

function Fiche() {  

    const [property, setProperty] = useState(null)
    const [error, setError] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=> {
        async function getProperty() {
            try {
                const response = await fetch(`http://localhost:8080/api/properties/${id}`)
                const propz = await response.json()

                if(response.status === 404) {
                    setError(true)
                } else {       
                    setError(false)             
                    setProperty(propz)
                }
                
            } catch (error) {
                console.error('Erreur lors de la requête fetch :', error)                
            }
        }
        getProperty()
    }, [id, navigate]) 
    
    if(error) {
        return <NotFound />
    } else if(property !== null) {
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

    
    }    


export default Fiche