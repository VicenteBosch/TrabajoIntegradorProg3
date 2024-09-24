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
                <p>{data.original_title}</p>
                </div>


                <div className="DetalleInfo">
                <p>Descripcion: {data.overview}</p>
                <p>Rating: {data.vote_average}</p>
                <p>Fecha de estreno: {data.release_date}</p>
                <p>Genero: {data.genre_ids}</p>
                
                </div>
                </div>
                 }
               
               
            </div>
        )
    }

}

export default DetallesComponent