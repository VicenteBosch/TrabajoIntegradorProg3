import React from 'react';
import { Component} from 'react';


class ResultadoBusqueda extends Component {
    constructor (props){
        super(props);
        this.state = { 
            resultados: []
        }
    }
    componentDidMount(){
        const busquedaUsuario = this.props.history.location.state.valorInput
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=0e2ea5762304016279ec676c08bd2b6d&query=${busquedaUsuario}`)
        .then(resp => resp.json)
        .then(data => { this.setState({resultados : data})})
        
    }
    render(){
        return(
            <div>
                {
         this.state.resultados.length > 0 ?
            this.state.resultados.map(elm => <h1>{elm.title}</h1>) 
         :
         <h1>No hay resutados de busqueda</h1>
                }
            </div>
        )
    }
}

export default ResultadoBusqueda