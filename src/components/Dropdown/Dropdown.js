import { useState } from "react"
import "./Dropdown.css"

function Dropdown({title, options}) {

    const [isOpen, setIsOpen] = useState(false)
    function openDropDown() {
        setIsOpen(!isOpen)
    }

    return(
    <div className="dropdown-container">
        <button onClick={openDropDown}>{title}</button>
        {isOpen &&
            <ul className="dropdown-menu">
                {options.map((option, index)=>(
                    <li key={`${option}-${index}`}>{option}</li>
                ))}
            </ul>
        }
    </div>
    )
}

export default Dropdown