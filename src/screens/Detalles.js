import React, { Component } from "react";

let api_key = "0e2ea5762304016279ec676c08bd2b6d";

class Detalles extends Component {
    constructor(props) {
        super(props);
        this.state = {
   
            pelicula: [],
            loading: true
        };
    }

    componentDidMount() {
        const id = Number(this.props.match.params.id); 
        console.log(id);

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
            .then(resp => resp.json())
            .then(data => {
                
                this.setState({
                    pelicula: data,
                   
                });
            })
            .catch((err) => console.log(err));
    }

    render() {

        return (
            <div className="detalle">
   
                <div className="sectiondetalle">   
                <h1>Detalle de: {this.state.pelicula.original_title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500/${this.state.pelicula.poster_path}`} alt="" />
                <p> Descripción: {this.state.pelicula.overview}</p>
                <p> Rating: {this.state.pelicula.vote_average} </p>
                <p> Fecha de estreno: {this.state.pelicula.release_date} </p>
                <p> Genero: {this.state.pelicula.genre_ids} </p>
                
            </div>
      
        </div>
    )}
}


export default Detalles;