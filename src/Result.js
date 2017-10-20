import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';

const one = [
  {"url":"/placeholrder.png", 'cost': 10, 'title': 'dog1', 'desc': 'descdog1'},
  {"url":"/placeholrder.png", 'cost': 20, 'title': 'dog2', 'desc': 'descdog2'},
  {"url":"/placeholrder.png", 'cost': 30, 'title': 'dog3', 'desc': 'descdog3'}
]
const two = [
  {"url":"/placeholrder.png", 'cost': 10, 'title': 'dog1', 'desc': 'descdog1'},
  {"url":"/placeholrder.png", 'cost': 20, 'title': 'dog2', 'desc': 'descdog2'},
  {"url":"/placeholrder.png", 'cost': 30, 'title': 'dog3', 'desc': 'descdog3'}
]
const three = [
  {"url":"/placeholrder.png", 'cost': 10, 'title': 'dog1', 'desc': 'descdog1'},
  {"url":"/placeholrder.png", 'cost': 20, 'title': 'dog2', 'desc': 'descdog2'},
  {"url":"/placeholrder.png", 'cost': 30, 'title': 'dog3', 'desc': 'descdog3'}
]
const four = [
  {"url":"/placeholrder.png", 'cost': 10, 'title': 'dog1', 'desc': 'descdog1'},
  {"url":"/placeholrder.png", 'cost': 20, 'title': 'dog2', 'desc': 'descdog2'},
  {"url":"/placeholrder.png", 'cost': 30, 'title': 'dog3', 'desc': 'descdog3'}
]
const five = [
  {"url":"/placeholrder.png", 'cost': 10, 'title': 'dog1', 'desc': 'descdog1'},
  {"url":"/placeholrder.png", 'cost': 20, 'title': 'dog2', 'desc': 'descdog2'},
  {"url":"/placeholrder.png", 'cost': 30, 'title': 'dog3', 'desc': 'descdog3'}
]
const all = [
  {"url":"/placeholrder.png", 'cost': 10, 'title': 'dog1', 'desc': 'descdog1'},
  {"url":"/placeholrder.png", 'cost': 20, 'title': 'dog2', 'desc': 'descdog2'},
  {"url":"/placeholrder.png", 'cost': 30, 'title': 'dog3', 'desc': 'descdog3'}
]

class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            winner:'',
            redo: false,
            buy: false
        }
        this.handleRedo = this.handleRedo.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
    }
    handleRedo(e){
      e.preventDefault()
      let newResult = this.state.winner;
      this.props.transferFinalResult(newResult)
      this.redoWinner();
      this.setState({
        redo:true
      })
    }
    handleBuy(e){
      e.preventDefault()
      let newResult = this.state.winner;
      this.props.transferFinalResult(newResult)
      this.setState({
        buy:true
      })
    }
    componentDidMount() {
      let quizResult = this.props.quizResult;
      let randomWinner =  Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      let winnerObject = '';
      if(quizResult === "one"){
        winnerObject = one[randomWinner]
      }else if(quizResult === "two"){
        winnerObject = two[randomWinner]
      }else if(quizResult === "three"){
        winnerObject = three[randomWinner]
      }else if(quizResult === "four"){
        winnerObject = four[randomWinner]
      }else if(quizResult === "five"){
        winnerObject = five[randomWinner]
      }else{
        winnerObject = all[randomWinner]
      }
      this.setState({
        winner:winnerObject
      })
    }
    redoWinner() {
      let quizResult = this.props.quizResult;
      let randomWinner =  Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      let winnerObject = '';
      if(quizResult === "one"){
        winnerObject = one[randomWinner]
      }else if(quizResult === "two"){
        winnerObject = two[randomWinner]
      }else if(quizResult === "three"){
        winnerObject = three[randomWinner]
      }else if(quizResult === "four"){
        winnerObject = four[randomWinner]
      }else if(quizResult === "five"){
        winnerObject = five[randomWinner]
      }else{
        winnerObject = all[randomWinner]
      }
      this.setState({
        winner:winnerObject
      })
    }

    render() {
      const{buy} = this.state;
        if(buy){
          return <Redirect to ='/confirmation'/>
        }
      return (
        <div className="App">
        <img alt="winner" src={this.state.winner.url} />
        <h1> {this.state.winner.title} </h1>
        <p> {this.state.winner.cost} </p>
        <p> {this.state.winner.desc} </p>
        <button onClick={(e) => this.handleRedo(e)}>Redo</button>
        <button onClick={(e) => this.handleBuy(e)}>Buy it</button>
        </div>
      );
    }
}

export default Result;
