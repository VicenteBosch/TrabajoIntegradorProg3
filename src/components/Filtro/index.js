import React, {Component} from "react"
import './style.css'

class Filtro extends Component {
    constructor(props) {
        super(props);
        this.state = {
          valorInput: "",
          peliculas: [],
          backup : []
        };
      }

detenerDefault(evento) {
    evento.preventDefault();
  }

  guardarInput(evento) {
    this.setState(
      {
        valorInput: evento.target.value,
      },
      () => this.props.filtrarPeliculas(this.state.valorInput)
    );
  }

  filtrarPeliculas(valorInput){
    let peliculasFiltradas = this.state.peliculas.filter(
        (elm)=>elm.name.toLowerCase().includes(valorInput.toLowerCase()))
        this.setState({
            peliculas: peliculasFiltradas
        })
  } 

render() {
    return (
      <div className="search-container">
      <form onSubmit={(evento) => this.detenerDefault(evento)}>
        <input
        className="search-input"
          type="text"
          onChange={(evento) => this.guardarInput(evento)}
          value={this.state.valorInput}
          placeholder="Buscar..."
        />
        
        {console.log(this.state.valorInput)}
      </form>
      </div>
    );
  }


}


export default Filtro