import React from 'react';
import { Component} from 'react';
import VerTodasEstrenos from '../components/VerTodasEstrenos';


class Estrenos extends Component {
    constructor (props){
        super(props);
        this.state = { 

        }
    }
    
    render(){
        return(
            <div>
         <VerTodasEstrenos/>
            </div>
        )
    }
}

export default Estrenos