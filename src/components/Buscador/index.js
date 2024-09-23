import React, {Component} from "react"
import { Link } from 'react-router-dom'
import "./style.css"

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
          valorInput: "",
          peliculas: [],
        };
      }



render() {
  
    return (
      <h2>results</h2>
    );
  }


}


export default Buscador