import React from 'react';
import { Component } from 'react';

import Movie from "../components/Movie"

class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: [],
            favoritos: localStorage.getItem('favoritos') !== null? localStorage.getItem('favoritos') : []
        }
    }
    componentDidMount() {
        
        // const busquedaUsuario = this.props.history.location.state.valorInput
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=0e2ea5762304016279ec676c08bd2b6d&query=${this.props.match.params.results}`)
            .then(resp => resp.json())
            .then(data => 
                 { this.setState({ resultados: data.results }) }
            )

    }
    actualizarFavoritos (arrayStorage) {
        this.setState({favoritos: arrayStorage})

    }
    render() {
        console.log(this.state.resultados)
        return (
            
            <div>
                {this.state.resultados.length > 0 ?


                    this.state.resultados.map((data, index) => (
                        <Movie
                            key={index}
                            data={data}
                            actualizarFavoritos={(arr) => this.actualizarFavoritos(arr)}  
                            esFavorito={this.state.favoritos.includes(data.id)}
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