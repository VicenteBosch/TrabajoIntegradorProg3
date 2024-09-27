import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./style.css";

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            VerMas: 0,
            favoritos: []
        };
    }

    VerDescripcion() {
        this.setState({ VerMas: 1 });
    }

    OcultarDescripcion() {
        this.setState({ VerMas: 0 });
    }

    agregarFavoritos(idPelicula) {
        let storage = localStorage.getItem("favoritos");
        if (storage !== null) {
            let storageParseado = JSON.parse(storage);
            storageParseado.push(idPelicula);
            this.props.actualizarFavoritos(storageParseado);
            let storageString = JSON.stringify(storageParseado);
            localStorage.setItem("favoritos", storageString);
        } else {
            let agregarArray = [idPelicula];
            this.props.actualizarFavoritos(agregarArray);
            let arrayStringificado = JSON.stringify(agregarArray);
            localStorage.setItem("favoritos", arrayStringificado);
        }
    }

    quitarFavoritos(idPelicula) {
        let storage = localStorage.getItem("favoritos");
        let storageParseado = JSON.parse(storage);
        let storageFiltrado = storageParseado.filter((elm) => elm !== idPelicula);
        this.props.actualizarFavoritos(storageFiltrado);
        let storageString = JSON.stringify(storageFiltrado);
        localStorage.setItem("favoritos", storageString);
    }

    render() {
        return (
            <article className='card-pelicula'>
                <Link to={`/detalle/pelicula/${this.props.data.id}`}>
                    <img
                        className="cardimg"
                        src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`}
                        alt={this.props.data.original_title}
                    />
                </Link>
                <h2>{this.props.data.original_title}</h2>

                <div className="descripcion-container">
                    {this.state.VerMas === 0 ?
                        <button onClick={() => this.VerDescripcion()}>Ver descripción</button> :
                        <button onClick={() => this.OcultarDescripcion()}>Ocultar descripción</button>
                    }
                    {this.state.VerMas === 1 ?
                        <p>{this.props.data.overview}</p> :
                        null
                    }
                </div>

                <h5 className="detalle-link">
                    <Link to={`/detalle/pelicula/${this.props.data.id}`}>Ir a detalle</Link>
                </h5>

                <div className="button-container">
                    {this.props.esFavorito === true ?
                        <button className="favoritos-button" onClick={() => this.quitarFavoritos(this.props.data.id)}>Quitar de Favoritos</button> :
                        <button className="favoritos-button" onClick={() => this.agregarFavoritos(this.props.data.id)}>Agregar a Favoritos</button>
                    }
                </div>
            </article>
        );
    }
}

export default Movie;
