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
            winner:''
        }
    }
    handleSend(winnerObject) {
      let newResult = winnerObject;
      this.props.transferFinalResult(newResult)
    }

    render() {
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

      return (
        <div className="App">
          <img alt="winner" src={winnerObject.url} />
          <h1> {winnerObject.title} </h1>
          <p> {winnerObject.cost} </p>
          <p> {winnerObject.desc} </p>
          <button>Redo</button>
          <button>Buy it</button>
        </div>
      );
    }
}

export default Result;
