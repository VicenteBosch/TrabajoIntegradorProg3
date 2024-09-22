import React, { Component } from "react";
import Movie from "../Movie/index"

const api_key =  "0e2ea5762304016279ec676c08bd2b6d";


class Estrenos extends Component {

    
    constructor() {

        super()
        this.state = {
            peliculas: []
        }

    }


    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => this.setState({ peliculas: data.results }))
            .catch(error => console.log(error))
    }

    render() {
        
        const primerasCinco = this.state.peliculas.length !== 0 ?  this.state.peliculas.slice(0, 5) : [];

        return (
            <div>
                {
                    primerasCinco.map((elm, idx) => <Movie data={elm}/>)

                }
            </div>)
    }


}



export default Estrenos