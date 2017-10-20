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
  constructor(props){
    super(props);
    this.state={
      quizResult: ''
    }
  this.transferResult = this.transferResult.bind(this)
  }
  transferResult(newResult){
    this.setState({
      quizResult: newResult
    })
  }
  render(){
    return (
      <Router>
      <div className="App">
          <nav>
            <Link to="/result">Result</Link>
            <Link to="/checkout">Checkout (shopping cart icon)</Link>

          </nav>
          <Switch>
           <Route exact path="/" render={() => <Quiz transferResult={this.transferResult}/>} />
           <Route path="/result" render={() => <Result quizResult={this.state.quizResult}/>}/>
           <Route path="/confirmation" component={Confirmation} />
           <Route component={NotFound} />
         </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
