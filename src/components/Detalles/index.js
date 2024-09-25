import React, {Component} from 'react';
import "./style.css"

class DetallesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:null,

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
    
    render() {
        const { data } = this.state;
        if (!data) {
            return <p>Cargando...</p>;
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
                <p>(Aca va la posibilidad de agragar a favoritos la pelicula)</p>
                </div>
             
                </div>
                 }
               
               
            </div>
        )
    }

}

export default DetallesComponent