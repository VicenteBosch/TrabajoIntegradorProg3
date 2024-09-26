import React from 'react';
import { Component} from 'react';
import Movie from '../components/Movie/index';


class Favoritos extends Component {
    constructor (props){
        super(props);
        this.state = { 
            peliculasFavoritas: []
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem("favoritos")
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
    
    actualizarFavoritos (arrayStorage){
        this.setState({favoritos: arrayStorage})
    }

    render(){
        return(

            <div>

                <h1>Peliculas Favoritas:</h1>
            {
                this.state.peliculasFavoritas.length > 0 ?
                this.state.peliculasFavoritas.map((elm,idx) =>  <Movie actualizarFavoritos={(arr) => this.actualizarFavoritos(arr)}  esFavorito={true} data= {elm} key= {`${idx}-${elm.name}`}/>)
                : <h1>No hay peliculas Favoritas</h1>
            }

            </div>
        )
    }
}

export default Favoritos