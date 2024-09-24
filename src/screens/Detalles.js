import React, { Component } from 'react';
import DetallesComponent from '../components/Detalles';

class Detalles extends Component {
   render(){
       return(
           <div>
               <DetallesComponent id={this.props.match.params.id} />
           </div>
       )
   }
}

export default Detalles;
