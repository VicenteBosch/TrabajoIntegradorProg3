import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./style.css"

class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            VerMas: 0,
            favoritos: []
        }
        console.log(this.props);
    }
    VerDescripcion() {
        this.setState({ VerMas: 1 })
    }
    OcultarDescripcion() {
        this.setState({ VerMas: 0 })
    }

    agregarFavoritos(idPelicula){
        let storage = localStorage.getItem("favoritos")

        if (storage !== null){
            let storageParseado = JSON.parse(storage)
            storageParseado.push(idPelicula)
            this.props.actualizarFavoritos(storageParseado)
            let storageString = JSON.stringify(storageParseado)
            localStorage.setItem("favoritos" , storageString)
        }

        else {
            let agregarArray = [idPelicula]
            this.props.actualizarFavoritos(agregarArray)
            let arrayStringificado = JSON.stringify(agregarArray)
            localStorage.setItem("favoritos" , arrayStringificado)
        }
    }

    quitarFavoritos(idPelicula){
        let storage = localStorage.getItem("favoritos")
        let storageParseado = JSON.parse(storage)
        let storageFiltrado = storageParseado.filter((elm) => elm !== idPelicula)
        this.props.actualizarFavoritos(storageFiltrado)
        let storageString = JSON.stringify(storageFiltrado)
        localStorage.setItem("favoritos" , storageString)
    }


    render() {
        return (

            <article className='card-pelicula'>
                <Link to={`/detalle/pelicula/${this.props.data.id}`}>
                    <img
                        className="cardimg"
                        src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`}
                        alt={"/"}
                    />
                </Link>
                <h2>{this.props.data.original_title}</h2>

                {this.state.VerMas === 0 ?
                    <button onClick={() => this.VerDescripcion()}>Ver descripción</button> :
                    <button onClick={() => this.OcultarDescripcion()}>Ocultar descripción</button>}
                {this.state.VerMas === 1 ?
                    <p>{this.props.data.overview}</p> :
                    <p></p>}

                <h5 className="detalle-link"> <Link to={`/detalle/pelicula/${this.props.data.id}`}>Ir a detalle</Link></h5>

                {this.props.esFavorito === true ? <button onClick={() => this.quitarFavoritos(this.props.data.id)}>Quitar de Favoritos</button> : 
                <button onClick={() => this.agregarFavoritos(this.props.data.id)}>Agregar a Favoritos</button>}


            </article>



        )
    }

}



export default Movie