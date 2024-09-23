import React from 'react';
import { Component} from 'react';


class Favoritos extends Component {
    constructor (props){
        super(props);
        this.state = { 
            peliculasFavoritas: []
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem("categoriasFavoritos")
        if(storage !== null){
            let storageParseado = JSON.parse(storage)

            Promise.all(
                storageParseado.map(elm => 
                    fetch(`https://api.themoviedb.org/3/movie/${elm}?api_key=0e2ea5762304016279ec676c08bd2b6d`)
                    .then(res => res.json())
                )
            )
            .then(data => this.setState({peliculasFavoritas: data}))
            
        }
    }
    
    render(){
        return(
            <div>
            {
                this.state.peliculasFavoritas.length > 0 ?
                    this.state.peliculasFavoritas.map(elm => <h1>{elm.title}</h1>)
                    : <h1>No hay peliculas Favoritas</h1>
            }
            </div>
        )
    }
}

export default Favoritos