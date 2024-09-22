import React from "react"
import {Switch, Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './screens/Home';
import Populares from './screens/Populares';
import Estrenos from './screens/Estrenos';
import Favoritos from './screens/Favoritos';

function App() {
 
  return (
    
      <Router>

        <Header />

        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/favoritos"  component={Favoritos}/>
          <Route path="/populares"  component={Populares}/>
          <Route path="/estrenos"  component={Estrenos}/>
          <Route path="/detalles/id/:id" component={Detalles}/>
        </Switch>

        <Footer />
        
      </Router>
  );
}

export default App;