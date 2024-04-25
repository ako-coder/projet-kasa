import './Cards.css'
import Card from '../Card/Card'

function Cards({properties}) {
    return(
    <div className='cards-container'>
        {properties.map(property => (
            <Card key={`property-${property.id}`} image={property.cover} title={property.title}/>
        ))}        
    </div>
    )
}

export default Cards