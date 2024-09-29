import React, { Component } from "react";
import Movie from "../Movie/index"
import { Link } from 'react-router-dom';
import "./style.css"

class Populares extends Component {


    constructor() {

        super()
        this.state = {
            peliculas: [],
            peliculasBackup: [],
            paginaCargar: 1,
            favoritos: localStorage.getItem('favoritos') !== null? localStorage.getItem('favoritos') : []
        }
 

    }


    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0e2ea5762304016279ec676c08bd2b6d")
            .then(res => res.json())
            .then(data => 
                 this.setState({ peliculas: data.results, peliculasBackup: data.results }))
            .catch(error => console.log(error))
    }

    cargarMas() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0e2ea5762304016279ec676c08bd2b6d&page=${this.state.paginaCargar + 1}`)
            .then(res => res.json())
            .then(data => 
                this.setState({
                peliculas: this.state.peliculas.concat(data.results),
                peliculasBackup: this.state.peliculasBackup.concat(data.results),
                paginaCargar: this.state.paginaCargar + 1
            })
        )
            .catch(error => console.log(error))
    }
    actualizarFavoritos (arrayStorage) {
        this.setState({favoritos: arrayStorage})

    }
    render() {
        console.log(this.state.favoritos)
        const primerasCinco = this.state.peliculas.length !== 0 ? this.state.peliculas.slice(0, 5) : [];

        return (
            <div>
                {this.state.paginaCargar === 1 ?
                    primerasCinco.map((elm, idx) => <Movie actualizarFavoritos={(arr) => this.actualizarFavoritos(arr)} esFavorito={this.state.favoritos.includes(elm.id)} data={elm} key={elm + idx} />):
                    this.state.peliculas.map((elm, idx) => <Movie actualizarFavoritos={(arr) => this.actualizarFavoritos(arr)} esFavorito={this.state.favoritos.includes(elm.id)} data={elm} key={elm + idx} />)

                }
                <div className="button-container">
                    <button className="cargar-mas-button"onClick={() => this.cargarMas()}>
                        Cargar mas
                    </button>

                    <Link to={"/populares"} >
                        <button className='ver-todas-button'>Ver todas</button>
                    </Link>
                </div>
            </div>)
    }


}



export default Populares