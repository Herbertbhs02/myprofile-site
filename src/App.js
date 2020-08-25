import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact';

function App() {
  return (
     <BrowserRouter>
       <div className="App">
        <Navbar/>
          <Switch>
            <Route  exact path='/' component={Home}/>
            <Route path='/Projects' component={Projects}/>
            <Route path='/Contact' component={Contact}/>
          </Switch>
       </div>
     </BrowserRouter>
   
  );
}

export default App;
