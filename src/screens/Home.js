import React from "react"
import Navbar from "../components/Navbar"
import Fichas from "../components/Fichas"
import Categorias from "../components/Categorias"
import Footer from "../components/Footer"
import Cards from "../components/Cards"

function Home() {
    return (


        <React.Fragment>

            <Navbar />
            <h1>  Mi App en React </h1>
            <main>
                <Fichas />
                <h2>Categories in database</h2>
                <Categorias />
                <h2>Personajes de películas</h2>
                <Cards/>
            </main>
            
            <Footer />

        </React.Fragment>






    )
}

export default Home