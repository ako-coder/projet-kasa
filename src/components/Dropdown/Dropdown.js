import { useState } from "react"
import "./Dropdown.css"
import arrowUp from '../../assets/arrow_up.png'
import arrowDown from '../../assets/arrow_down.png'

function Dropdown({title, options}) {

    const [isOpen, setIsOpen] = useState(false)
    function openDropDown() {
        setIsOpen(!isOpen)
    }

    return(
    <div className="dropdown-container">
        <button onClick={openDropDown}>
            <div>{title}</div>
            <div>
                {isOpen ? 
                    <img src={arrowDown} alt="Open" /> :
                    <img src={arrowUp} alt="Closed" />
                }   
            </div>
        </button>
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
            <ul>
                {options.map((option, index)=>(
                    <li key={`${option}-${index}`}>{option}</li>
                ))}
            </ul>
        </div>
    </div>
    )
}

export default Dropdown
