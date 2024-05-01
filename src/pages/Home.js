import { useEffect, useState } from "react"
import Banner from "../components/Banner/Banner"
import Cards from "../components/Cards/Cards"
import BannerPic from "../assets/banner.png"

function Home() {

    const [properties, setProperties] = useState([])

    useEffect(()=> {
        async function getProperties() {
            try {
                const response = await fetch('http://localhost:8080/api/properties')
                const propz = await response.json()
                
                setProperties(propz)
            } catch (error) {
                console.error('Erreur lors de la requête fetch :', error)
            }
        }
        getProperties()
    }, [])

    return(
    <div>
        <Banner image={BannerPic} text={"<span>Chez vous,</span> partout et ailleurs"} />
        <Cards properties={properties}/>
    </div>
    ) 
}

export default Home