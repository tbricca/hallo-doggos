import React, { Component } from 'react';
import './App.css';
import Quiz from './Quiz';
import Result from './Result';
import Confirmation from './Confirmation';
import NotFound from './NotFound';

import{
  BrowserRouter as Router,
  Route,
  Switch,
  Link
}from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
      <div className="App">
          <nav>
            <Link to="/result">Result</Link>
            <Link to="/checkout">Checkout (shopping cart icon)</Link>

          </nav>
          <Switch>
           <Route exact path="/" component={Quiz} />
           <Route path="/result" component={Result} />
           <Route path="/confirmation" component={Confirmation} />
           <Route component={NotFound} />
         </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
