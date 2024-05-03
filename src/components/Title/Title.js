import './Title.css'

function Title({property}) {
   
    return(
    <div className='title-container'>
        <h1>{ property.title }</h1>
        <p>{ property.location }</p>
    </div>
    )
}

export default Title