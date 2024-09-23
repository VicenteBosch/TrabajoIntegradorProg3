import React, { Component } from "react";

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {favoritos: localStorage.getItem('favoritos'),peliculas:[]}
    }
}


export default Favoritos;