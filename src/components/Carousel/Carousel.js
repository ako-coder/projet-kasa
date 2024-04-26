import './Carousel.css'
import ArrowForward from '../../assets/arrow_forward.png'
import ArrowBack from '../../assets/arrow_back.png'
import { useState } from 'react'

function Carousel({images}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    function clickForward() {
        const newIndex = currentIndex + 1
        if(newIndex < images.length - 1){
            setCurrentIndex(newIndex)
        } else {
            setCurrentIndex(0)
        }       
    }

    function clickBack() {
        const newIndex = currentIndex - 1
        if(newIndex < 0) {
            setCurrentIndex(images.length - 1)
        } else {
            setCurrentIndex(newIndex)
        }
    }

    return(
        <div className='carousel-container'>
            <div className='carousel-nav'>
                <img src={ArrowBack} onClick={clickBack}></img>
                <img src={ArrowForward} onClick={clickForward}></img>
            </div>            
            <img className='carousel-slide' src={images[currentIndex]}></img>
            <p>{`${currentIndex + 1}/${images.length}`}</p>
        </div>
    )
}

export default Carousel