import React, { Component } from "react";
import './style.css';

class Filtro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valorInput: ""
        };
    }

    detenerDefault(evento) {
        evento.preventDefault(); 
    }

    guardarInput(evento) {
        this.setState({
            valorInput: evento.target.value
        });
    }

    handleSearch = () => {
        this.props.filtrarPeliculas(this.state.valorInput); 
    };

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
                    <button type="submit" onClick={this.handleSearch}>Buscar</button> 
                </form>
            </div>
        );
    }
}

export default Filtro;
