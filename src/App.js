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
      imageResult: '',
      name: 'Fido',
      quantity: 1
    }
  this.transferResult = this.transferResult.bind(this)
  this.transferFinalResult = this.transferFinalResult.bind(this)
  this.transferName = this.transferName.bind(this)
  this.transferQuantity = this.transferQuantity.bind(this)
  }
  transferName(nameDog){
    this.setState({
      name: nameDog
    })
  }
  transferResult(newResult){
    this.setState({
      quizResult: newResult
    })
  }
  transferFinalResult(newResult){
    this.setState({
      imageResult: newResult
    })
  }
  transferQuantity(newQuantity){
    this.setState({
      quantity: newQuantity
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
           <Route exact path="/" render={() => <Quiz transferName={this.transferName} transferResult={this.transferResult}/>} />
           <Route path="/result" render={() => <Result dogName={this.state.name} transferQuantity={this.transferQuantity} transferFinalResult={this.transferFinalResult} quizResult={this.state.quizResult}/>}/>
           <Route path="/confirmation" render={() => <Confirmation quantity={this.state.quantity} imageResult={this.state.imageResult}/>}/>
           <Route component={NotFound} />
         </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
