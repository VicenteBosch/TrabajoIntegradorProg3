import React from 'react';
import { Component} from 'react';
import DetallesComponent from '../components/Detalles';

class Detalles extends Component {
    constructor (props){
        super(props);
        this.state = { 

        }
    }
    
    render(){
        return(
            <div>
                <DetallesComponent id= {this.props.match.params.id}/>
            </div>
        )
    }
}

export default Detalles