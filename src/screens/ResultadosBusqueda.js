import React from 'react';
import { Component } from 'react';

import Movie from "../components/Movie"

class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: []
        }
    }
    componentDidMount() {
        const busquedaUsuario = this.props.history.location.state.valorInput
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=0e2ea5762304016279ec676c08bd2b6d&query=${busquedaUsuario}`)
            .then(resp => resp.json)
            .then(data => { this.setState({ resultados: data }) })

    }
    render() {
        return (
            <div>
                {this.state.resultados.length > 0 ?


                    this.state.resultados.map((data, index) => (
                        <Movie
                            key={index}
                            img={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                            nombre={data.title}
                            descripcion={data.overview}
                            ruta={data.id}
                        />
                    ))


                    :
                    <p>No se han encontrado resultados, intanta con otra cosa!</p>
                }
            </div>
        )
    }
}

export default ResultadoBusqueda