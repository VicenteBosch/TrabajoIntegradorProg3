import React, {Component} from "react";

import Populares from "../components/Populares/index"
import Header from "../components/Header/index"
import Estrenos from "../components/Estrenos/index"
import Buscador from "../components/Buscador/index"



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log('props de home',props)
    }

    render () {
        return (

            <div className="PadreHome">
                <Buscador className="BuscadorHome" history={this.props.history}/>
                <div className="PadreSecciones">
                <h2>Populares</h2>
                <Populares />
                <h2>Estrenos</h2>
                <Estrenos />
                </div>
            </div>
        )
    }
}

export default Home