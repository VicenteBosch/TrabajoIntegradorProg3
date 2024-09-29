import React, { Component } from 'react';
import "./style.css";

class DetallesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: null,
            esFavorito: false // Estado para controlar si es favorito
        };
    }

    componentDidMount() {
        const { id } = this.props;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0e2ea5762304016279ec676c08bd2b6d`)
            .then(res => res.json())
            .then(data => {
                this.setState({ data: data, esFavorito: this.props.esFavorito }); // Establece el estado inicial de esFavorito
            })
            .catch(e => console.log(e));
    }

    agregarFavoritos(idPelicula) {
        let storage = localStorage.getItem("favoritos");
        let storageParseado = storage ? JSON.parse(storage) : [];

        if (!storageParseado.includes(idPelicula)) { // Solo agrega si no está ya en favoritos
            storageParseado.push(idPelicula);
            this.props.actualizarFavoritos(storageParseado);
            localStorage.setItem("favoritos", JSON.stringify(storageParseado));
            this.setState({ esFavorito: true }); // Actualiza el estado a verdadero
        }
    }

    quitarFavoritos(idPelicula) {
        let storage = localStorage.getItem("favoritos");
        let storageParseado = JSON.parse(storage);
        let storageFiltrado = storageParseado.filter((elm) => elm !== idPelicula);
        this.props.actualizarFavoritos(storageFiltrado);
        localStorage.setItem("favoritos", JSON.stringify(storageFiltrado));
        this.setState({ esFavorito: false }); // Actualiza el estado a falso
    }

    render() {
        const { data, esFavorito } = this.state;
        if (!data) {
            return <p className="cargando">Cargando...</p>;
        }
        return (
            <div className="PadreDetallePelicula">
                <div className="DetallePoster">
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.original_title} />
                    <h2>{data.original_title}</h2>
                </div>

                <div className="DetalleInfo">
                    <p>{data.overview}</p>
                    <p><strong>Calificación:</strong> {data.vote_average}</p>
                    <p><strong>Fecha de estreno:</strong> {data.release_date}</p>
                    <div className="Generos"><strong>Generos:</strong> {data.genres.map((elm, idx) => <p key={idx}>{elm.name}</p>)}</div>
                    <div className="button-container">
                        {esFavorito ? 
                            <button className="favoritos-button" onClick={() => this.quitarFavoritos(this.props.id)}>Quitar de Favoritos</button> :
                            <button className="favoritos-button" onClick={() => this.agregarFavoritos(this.props.id)}>Agregar a Favoritos</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default DetallesComponent;
