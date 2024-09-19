import React from "react"
import {Switch, Route} from 'react-router-dom'


import Header from './components/Header'
import Footer from './components/Footer'

import Home from './screens/Home';
import Populares from './screens/Populares';
import Estrenos from './screens/Estrenos';
import Favoritos from './screens/Favoritos';



function App() {
 
  return (
    <>

      <Header />

  

      <Footer />
    </>
  );
}

export default App;