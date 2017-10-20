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
      quizResult: '',
      imageResult: ''
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
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">HalloDoggo</a>
              </div>
                <ul className="nav navbar-nav navbar-right">
                  <li className="navList"><Link to="/confirmation"><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i></Link></li>
                </ul>
            </div>
          </nav>
          <Switch>
           <Route exact path="/" render={() => <Quiz transferResult={this.transferResult}/>} />
           <Route path="/result" render={() => <Result quizResult={this.state.quizResult}/>}/>
           <Route path="/confirmation" render={() => <Confirmation imageResult={this.state.imageResult}/>}/>
           <Route component={NotFound} />
         </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
