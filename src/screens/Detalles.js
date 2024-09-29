import React, { Component } from 'react';
import DetallesComponent from '../components/Detalles';

class Detalles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritos: JSON.parse(localStorage.getItem("favoritos")) || [], 
        };
    }

    
    actualizarFavoritos = (nuevosFavoritos) => {
        this.setState({ favoritos: nuevosFavoritos });
    };

    
    esFavorito = (idPelicula) => {
        return this.state.favoritos.includes(idPelicula);
    };

    render() {
        const { id } = this.props.match.params; 
        return (
            <div>
                <DetallesComponent
                    id={id}
                    actualizarFavoritos={this.actualizarFavoritos} 
                    esFavorito={this.esFavorito(id)} 
                />
            </div>
        );
    }
}

export default Detalles;
