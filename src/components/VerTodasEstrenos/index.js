import React, { Component } from "react";
import Movie from "../Movie/index";
import Filtro from "../Filtro";
import "./style.css";

const api_key = "0e2ea5762304016279ec676c08bd2b6d";

class VerTodasEstrenos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            backup: [],
            page: 1,
            favoritos: localStorage.getItem('favoritos') !== null ? JSON.parse(localStorage.getItem('favoritos')) : []
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    peliculas: data.results,
                    backup: data.results
                });
            })
            .catch(error => console.log(error));
    }

    buscarMas() {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&page=${this.state.page + 1}`)
            .then(res => res.json())
            .then(data => this.setState({
                peliculas: this.state.peliculas.concat(data.results),
                page: this.state.page + 1,
                backup: this.state.backup.concat(data.results)
            }))
            .catch(err => console.log(err));
    }

    actualizarFavoritos(arrayStorage) {
        this.setState({ favoritos: arrayStorage });
    }

    filtrarPeliculas(valorInput) {
        let peliculasFiltradas = this.state.backup.filter(
            (elm) => elm.title.toLowerCase().includes(valorInput.toLowerCase())
        );
        this.setState({
            peliculas: peliculasFiltradas
        });
    }

    render() {
        return (
            <div className="Buscar">
                <div>
                    <Filtro filtrarPeliculas={(valorInput) => this.filtrarPeliculas(valorInput)} />
                </div>
                
                {this.state.peliculas.length === 0 ? 
                    <h1>Cargando..</h1> 
                 : 
                    <div className='PadreVerTodas'>
                        {
                            this.state.peliculas.map((elm, idx) => (
                                <Movie 
                                    actualizarFavoritos={(arr) => this.actualizarFavoritos(arr)}  
                                    esFavorito={this.state.favoritos.includes(elm.id)} 
                                    data={elm}  
                                    key={idx + elm.title}
                                />
                            ))
                        }
                    </div>
                }
                <div className="button-container">
                    <button className="cargar-mas-button" onClick={() => this.buscarMas()}>Cargar Más</button>
                </div>
            </div>
        );
    }
}

export default VerTodasEstrenos;
