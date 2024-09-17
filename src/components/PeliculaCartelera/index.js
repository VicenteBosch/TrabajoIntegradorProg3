import React, { Component } from "react";
import {Link} from 'react-router-dom';
import PeliculaCarteleras from "../PeliculaCarteleras"


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagen: props.imagen,
            nombre: props.nombre,
            descripcion: props.descripcion,
            verMas: false,
            textoBoton: "Ver Más",
            seleccionado: false 
        };
    }

    cambiarVerMas = () => {
        this.setState(prevState => ({
            verMas: !prevState.verMas,
            textoBoton: prevState.verMas ? "Ver Más" : "Ver Menos"
        }));
    }

    seleccionar = () => {
        this.setState(prevState => ({
            seleccionado: !prevState.seleccionado
        }));
    }

    render() {
        return (
            <div className={this.state.seleccionado ? "active" : ""}
                onDoubleClick={this.seleccionar}>

                <img src={this.state.imagen} alt={this.state.nombre} />
                <h4>{this.state.nombre}</h4>
                <p>{this.state.verMas ? this.state.descripcion : ""}</p>
                <button onClick={this.cambiarVerMas}>{this.state.textoBoton}</button>
            </div>
        );
    }
}

export default Card;
