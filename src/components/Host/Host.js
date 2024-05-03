import './Host.css'

function Host({property}) {
   
    return(
    <div className='host-container'>
        <p>{ property.host.name }</p>
        <img src={ property.host.picture }></img>
    </div>
    )
}

export default Host