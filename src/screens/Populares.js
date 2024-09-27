import React from 'react';
import { Component} from 'react';
import VerTodasPopulares from '../components/VerTodasPopulares';

class Populares extends Component {
    constructor (props){
        super(props);
        this.state = { 

        }
    }
    
    render(){
        return(
            <div>
         <VerTodasPopulares/>
            </div>
        )
    }
}

export default Populares