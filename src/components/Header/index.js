import React from "react";
import "./style.css"
import Opcion from "../Opcion/Opcion"

function Navbar(props) {

    const opciones = ["ADMIN", "Pages", "Charts", "Tables"]; 
    
    
    return (

    
        <nav>
            <ul className="main-nav">

                  {opciones.map( (elm) => <Opcion name={elm} />)}
                
            </ul>
            <ul className="user">
                
            <li>Vicente Bosch <img src="./imgs/user.jpg" alt=""/></li>
            </ul>

        </nav>



    )
}

export default Navbar