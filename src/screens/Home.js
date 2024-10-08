import React, {Component} from "react";

import Populares from "../components/Populares/index"
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
            <React.Fragment>
            <div className="PadreHome">
                <Buscador className="BuscadorHome" history={this.props.history}/>
                <div className="PadreSecciones">
                <h2 className="populares">Populares</h2>
                <Populares />
                <h2 className="estrenos">Estrenos</h2>
                <Estrenos />
                </div>
            </div>
            
            </React.Fragment>
        )
    }
}

export default Home