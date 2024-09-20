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

      <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/favoritos"  component={Favoritos}/>
      <Route path="/populares"  component={Populares}/>
      <Route path="/estrenos"  component={Estrenos}/>
      </Switch>

      <Footer />
    </>
  );
}

export default App;