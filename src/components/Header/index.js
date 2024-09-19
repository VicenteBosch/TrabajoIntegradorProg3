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
        ruta: "/Favoritos"
    },
    {
        nombre: "Populares",
        ruta:"/Populares"
    },
    {
        nombre: "Estrenos",
        ruta:"/Estrenos"
    }
]

function Header(props){
    return(
        <nav>
        <img className= "logo" src="/imgs/logoPagina.png" alt="logo"/> 
        <ul className="main-nav">
            {opciones.map((elemento)=> <Opcion data= {elemento}/>)}
        </ul>
    </nav>
    )
}



export default Header