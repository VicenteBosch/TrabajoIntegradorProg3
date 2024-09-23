import React from "react";

import Populares from "../components/Populares/index"

import Estrenos from "../components/Estrenos/index"

function Home (){
    return(


        <main>
            <h2>Películas más populares</h2>
            <Populares/>
            <h2>Películas en cartel</h2>
            <Estrenos/>
            

        </main>
       
    
    )
}

export default Home