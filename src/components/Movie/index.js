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


            </article>



        )
    }

}



export default Movie