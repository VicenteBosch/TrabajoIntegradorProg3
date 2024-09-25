import React from "react";
import { Link } from 'react-router-dom';


import Opcion from "../Opcion";
import './style.css'


const opciones = [
    {
        nombre: "Home",
        ruta: '/'
    },
    {
        nombre: "Favoritos",
        ruta: "/favoritos"
    },
    {
        nombre: "Populares",
        ruta: "/populares"
    },
    {
        nombre: "Estrenos",
        ruta: "/estrenos"
    }
]

function Header(props) {
    return (
        <nav>

       

            <Link to={`/`}>
                <img
                    className="logo"
                    src={"/imgs/logo.png"}
                    alt={"logo"}
                />
            </Link>



            <ul className="main-nav">
                {opciones.map((elemento, idx) => <Opcion data={elemento} key={idx + elemento.nombre} />)}
            </ul>

        </nav>
    )
}



export default Header;