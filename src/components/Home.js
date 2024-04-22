import { useEffect, useState } from "react"
import Banner from "./Banner/Banner"
import Cards from "./Cards"

function Home() {

    const [properties, setProperties] = useState()

    useEffect(()=>{
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
        <Banner />
        <Cards />
    </div>
    ) 
}

export default Home