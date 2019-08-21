import React from 'react';

import './App.css';
import Home from './Home';
import Nav from './Nav';
import Nyc from './Nyc';
import Cali from './Cali';
import Music from './Music';
import Vt from './Vt';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router> 
   <div classname='App'>
 <Nav/>  
 <Switch>
 <Route path="/Home" exact component={Home}/>
 <Route path="/Nyc"component={Nyc}/>
 <Route path="/Cali"component={Cali}/>
 <Route path="/Music"component={Music}/>
 <Route path="/Vt" component={Vt}/>

 </Switch>
   </div>
   </Router>

  );
}

export default App;
