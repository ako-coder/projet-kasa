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
                    <img src={arrowDown} alt="Open Image" /> :
                    <img src={arrowUp} alt="Closed Image" />
                }   
            </div>
        </button>
        <div>{isOpen &&
                <ul className="dropdown-menu">
                    {options.map((option, index)=>(
                        <li key={`${option}-${index}`}>{option}</li>
                    ))}
                </ul>
            }
        </div>
    </div>
    )
}

export default Dropdown