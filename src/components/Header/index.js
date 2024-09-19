import React from "react";
import Opcion from "../Opcion";
import './style.css'


const opciones = [
    {
        nombre:"Home",
        ruta: '/'
    }, 
    {
        nombre: "Favoritos",
        ruta: "/favoritos"
    },
    {
        nombre: "Populares",
        ruta:"/populares"
    },
    {
        nombre: "Estrenos",
        ruta:"/estrenos"
    }
]

function Header(props){
    return(
        <nav>
            
            <img className= "logo" src="/imgs/logo.png" alt="logo"/> 

            <ul className="main-nav">
                {opciones.map((elemento)=> <Opcion data= {elemento}/>)}
            </ul>
            
        </nav>
    )
}



export default Header;