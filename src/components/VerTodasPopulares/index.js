import React, { Component } from "react";
import Movie from "../Movie/index";
import Filtro from "../Filtro";


class VerTodasPopulares extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            backuppeliculas: [],
            paginaACargar: 1
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0e2ea5762304016279ec676c08bd2b6d")
            .then(res => res.json())
            .then((data) => {
                setTimeout(() => this.setState({
                peliculas: data.results,
                backuppeliculas: data.results
                }), 3000)
            })
            .catch(error => console.log(error))
    }

    buscarMas(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0e2ea5762304016279ec676c08bd2b6d&page=${(this.state.page + 1)}`)
        .then(res => res.json())
        .then(data => this.setState({
            peliculas : this.state.peliculas.concat(data.results),
            page: this.state.page + 1,
            backup : this.state.backup.concat(data.results)
        }))
        .catch(err => console.log(err))
    }
    actualizarFavoritos (arrayStorage) {
        this.setState({favoritos: arrayStorage})

    }
    filtrarPeliculas(valorInput){
        let peliculasFiltradas = this.state.backup.filter(
            (elm)=>elm.title.toLowerCase().includes(valorInput.toLowerCase()))
            this.setState({
                peliculas: peliculasFiltradas
            })
      } 
      render() {
        if (this.state.peliculas.length == 0) {
            return <p>Cargando...</p>;
        };

        return(
            <div className="Buscar">
                {console.log(this.state.peliculas)}
                <div>
                <Filtro filtrarPeliculas = {(valorInput) => this.filtrarPeliculas(valorInput)}/>
                </div>
                
                {this.state.peliculas == null ? <h1>Cargando..</h1> : <div className='PadreVerTodas'>
                {
                    this.state.peliculas.map(( elm, idx) => <CardPelicula actualizarFavoritos={(arr) => this.actualizarFavoritos(arr)}  esFavorito={this.state.favoritos.includes(elm.id)} data= {elm}  key={idx + elm.title}/>)
                    
                }
                
                    </div>}
                    <button className="button-ver-mas" onClick={()=>this.buscarMas()}> Ver Mas</button>
                
            </div>
        )
    }
}




export default VerTodasPopulares