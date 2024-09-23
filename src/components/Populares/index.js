import React, { Component } from "react";

import Movie from "../Movie/index"

class Populares extends Component {


    constructor() {

        super()
        this.state = {
            peliculas: [],
            paginaCargar: 2
        }

    }


    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0e2ea5762304016279ec676c08bd2b6d")
            .then(res => res.json())
            .then(data => this.setState({ peliculas: data.results }))
            .catch(error => console.log(error))
    }

    cargarMas() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0e2ea5762304016279ec676c08bd2b6d&page=${this.state.paginaCargar}`)
            .then(res => res.json())
            .then(data => this.setState({
                peliculas: this.state.peliculas.concat(data.results),
                peliculasBackup: this.state.peliculas.concat(data.results),
                paginaCargar: this.state.paginaCargar + 1
            }))
            .catch(error => console.log(error))
    }

    render() {

        const primerasCinco = this.state.peliculas.length !== 0 ? this.state.peliculas.slice(0, 5) : [];

        return (
            <div>
                {
                    primerasCinco.map((elm, idx) => <Movie data={elm} key={elm + idx} />)

                }
                <button onClick={() => this.cargarMas()}>
                    Cargar mas
                </button>
            </div>)
    }


}



export default Populares