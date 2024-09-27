import React, {Component} from "react"
import "./style.css"

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
          valorInput: "",
          peliculas: [],
          
        };
      }

      detenerDefault(evento) {
        evento.preventDefault();
        this.props.history.push('/results/'+this.state.valorInput)
      }
    
      guardarInput(evento) {
        this.setState(
          {
            valorInput: evento.target.value,
            
          }
        );
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
            <button>Buscar</button>
       
            <i className="fas fa-search search-icon"></i>
          
          </form>
          </div>
        );
      }
    
    
    }
    


export default Buscador