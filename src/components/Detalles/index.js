import React, {Component} from 'react';
import "./style.css"

class DetallesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:null,
            favoritos: []

        }
    }


    componentDidMount (){
        const { id } = this.props;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0e2ea5762304016279ec676c08bd2b6d`)
        .then(res => res.json())
        //  .then(data => console.log(data)) 
         .then(data => this.setState({data: data}) )
        .catch(e => console.log(e))
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
        const { data } = this.state;
        if (!data) {
            return <p className="cargando">Cargando...</p>;
        }
        return (
            <div className="PadreDetallePelicula">
                {data == null ? <h1>Cargando</h1> : <div> <div className="DetallePoster">
                <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.original_title} />
                <h2>{data.original_title}</h2>
                </div>


                <div className="DetalleInfo">
                <p> {data.overview}</p>
                <p>Calificación: {data.vote_average}</p>
                <p>Fecha de estreno: {data.release_date}</p>
                <div className="Generos">Generos: {data.genres.map((elm, idx) => <p>{elm.name}</p>)} </div>
                <div className="button-container">
                    {this.props.esFavorito === true ?
                        <button className="favoritos-button" onClick={() => this.quitarFavoritos(this.props.data.id)}>Quitar de Favoritos</button> :
                        <button className="favoritos-button" onClick={() => this.agregarFavoritos(this.props.data.id)}>Agregar a Favoritos</button>
                    }
                </div>
                </div>
             
                </div>
                 }
               
               
            </div>
        )
    }

}

export default DetallesComponent