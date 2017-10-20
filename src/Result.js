import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';

const confident = "Your dog is a leader and self-proclaimed alpha of the pack! They do not and will not hesitate at any situation that may arise. They may be a bit stubborn at times, but don’t worry aren’t we all a little stubborn. The best part about your dog is that they’ll always be there to protect you from evil. Your dog may be dominant but deep down they are there to protect you from harm's way. Do not fear, your dog is here!"
const confResult = "result: The confident, courage, and bold dog";
const adaptable = "Your dog is your best moral support! They love to comfort, cuddle, and straight up be there for you. They are super personable with everything and everyone, rarely will you find them not get along with another person or animal. They love to please you and make you happy! Bonus, they are great listeners, so don’t worry because they’ll always be there for you. "
const adaptResult = "result: The adaptable, helpful, and supportive dog";
const independent = "Your dog may be a little reserved at times, but don’t mistaken that as a weakness. Your dog is very independent and doesn’t mind the fact they aren’t the center of attention. Their independence may be perceived as shyness, but truthfully your dog just doesn’t care."
const indResult = "result: Independent, strong, and fearless dog";
const shy = "Your dog may be a bit shy, but they are complete sweethearts once they are comfortable. They are quite sensitive to their surrounding and can easily be overwhelmed. Your dog may be timid, but love and support can boost their confidence level. They loved to be held since it gives them a sense of security and protection."
const shyResult = "result: Shy, nervous, and timid dog";
const happy = "Your dog is a social butterfly! They love making new friends and instantly brings a positive energy to any room. They typically get along with everyone they meet, they’re easily excited with an endless amount of energy. They don’t mind being the center of attention, also loves to play anywhere and anything. Since they are so social, this also makes them very curious. They love going on adventures and exploring new surroundings they’re unfamiliar with."
const happyResult = "result: Happy, social and enthusiastic dog";

const one = [
  {"url":"/placeholder.png", 'cost': 10, 'title': 'dog1', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada elit sed lectus euismod, sit amet lobortis elit consequat. Praesent eu tincidunt ipsum, sit amet vehicula enim. Integer a mi ornare, faucibus nisi sed, vulputate urna. Vestibulum viverra elementum eleifend. '},
  {"url":"/placeholder.png", 'cost': 20, 'title': 'dog2', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada elit sed lectus euismod, sit amet lobortis elit consequat. Praesent eu tincidunt ipsum, sit amet vehicula enim. Integer a mi ornare, faucibus nisi sed, vulputate urna. Vestibulum viverra elementum eleifend. 2'},
  {"url":"/placeholder.png", 'cost': 30, 'title': 'dog3', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada elit sed lectus euismod, sit amet lobortis elit consequat. Praesent eu tincidunt ipsum, sit amet vehicula enim. Integer a mi ornare, faucibus nisi sed, vulputate urna. Vestibulum viverra elementum eleifend. 3'}
]
const two = [
  {"url":"/placeholder.png", 'cost': 10, 'title': 'dog1', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada elit sed lectus euismod, sit amet lobortis elit consequat. Praesent eu tincidunt ipsum, sit amet vehicula enim. Integer a mi ornare, faucibus nisi sed, vulputate urna. Vestibulum viverra elementum eleifend. 1'},
  {"url":"/placeholder.png", 'cost': 20, 'title': 'dog2', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada elit sed lectus euismod, sit amet lobortis elit consequat. Praesent eu tincidunt ipsum, sit amet vehicula enim. Integer a mi ornare, faucibus nisi sed, vulputate urna. Vestibulum viverra elementum eleifend. '},
  {"url":"/placeholder.png", 'cost': 30, 'title': 'dog3', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada elit sed lectus euismod, sit amet lobortis elit consequat. Praesent eu tincidunt ipsum, sit amet vehicula enim. Integer a mi ornare, faucibus nisi sed, vulputate urna. Vestibulum viverra elementum eleifend. 3'}
]
const three = [
  {"url":"/placeholder.png", 'cost': 10, 'title': 'dog1', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada elit sed lectus euismod, sit amet lobortis elit consequat. Praesent eu tincidunt ipsum, sit amet vehicula enim. Integer a mi ornare, faucibus nisi sed, vulputate urna. Vestibulum viverra elementum eleifend. 1'},
  {"url":"/placeholder.png", 'cost': 20, 'title': 'dog2', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada elit sed lectus euismod, sit amet lobortis elit consequat. Praesent eu tincidunt ipsum, sit amet vehicula enim. Integer a mi ornare, faucibus nisi sed, vulputate urna. Vestibulum viverra elementum eleifend. 2'},
  {"url":"/placeholder.png", 'cost': 30, 'title': 'dog3', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada elit sed lectus euismod, sit amet lobortis elit consequat. Praesent eu tincidunt ipsum, sit amet vehicula enim. Integer a mi ornare, faucibus nisi sed, vulputate urna. Vestibulum viverra elementum eleifend. 3'}
]
const four = [
  {"url":"/placeholder.png", 'cost': 10, 'title': 'dog1', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada elit sed lectus euismod, sit amet lobortis elit consequat. Praesent eu tincidunt ipsum, sit amet vehicula enim. Integer a mi ornare, faucibus nisi sed, vulputate urna. Vestibulum viverra elementum eleifend. 1'},
  {"url":"/placeholder.png", 'cost': 20, 'title': 'dog2', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada elit sed lectus euismod, sit amet lobortis elit consequat. Praesent eu tincidunt ipsum, sit amet vehicula enim. Integer a mi ornare, faucibus nisi sed, vulputate urna. Vestibulum viverra elementum eleifend. 2'},
  {"url":"/placeholder.png", 'cost': 30, 'title': 'dog3', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada elit sed lectus euismod, sit amet lobortis elit consequat. Praesent eu tincidunt ipsum, sit amet vehicula enim. Integer a mi ornare, faucibus nisi sed, vulputate urna. Vestibulum viverra elementum eleifend. 3'}
]
const five = [
  {"url":"/placeholder.png", 'cost': 10, 'title': 'dog1', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada elit sed lectus euismod, sit amet lobortis elit consequat. Praesent eu tincidunt ipsum, sit amet vehicula enim. Integer a mi ornare, faucibus nisi sed, vulputate urna. Vestibulum viverra elementum eleifend. 1'},
  {"url":"/placeholder.png", 'cost': 20, 'title': 'dog2', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada elit sed lectus euismod, sit amet lobortis elit consequat. Praesent eu tincidunt ipsum, sit amet vehicula enim. Integer a mi ornare, faucibus nisi sed, vulputate urna. Vestibulum viverra elementum eleifend. 2'},
  {"url":"/placeholder.png", 'cost': 30, 'title': 'dog3', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada elit sed lectus euismod, sit amet lobortis elit consequat. Praesent eu tincidunt ipsum, sit amet vehicula enim. Integer a mi ornare, faucibus nisi sed, vulputate urna. Vestibulum viverra elementum eleifend. 3'}
]
const all = [
  {"url":"/placeholder.png", 'cost': 10, 'title': 'dog1', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada elit sed lectus euismod, sit amet lobortis elit consequat. Praesent eu tincidunt ipsum, sit amet vehicula enim. Integer a mi ornare, faucibus nisi sed, vulputate urna. Vestibulum viverra elementum eleifend. 1'},
  {"url":"/placeholder.png", 'cost': 20, 'title': 'dog2', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada elit sed lectus euismod, sit amet lobortis elit consequat. Praesent eu tincidunt ipsum, sit amet vehicula enim. Integer a mi ornare, faucibus nisi sed, vulputate urna. Vestibulum viverra elementum eleifend. 2'},
  {"url":"/placeholder.png", 'cost': 30, 'title': 'dog3', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada elit sed lectus euismod, sit amet lobortis elit consequat. Praesent eu tincidunt ipsum, sit amet vehicula enim. Integer a mi ornare, faucibus nisi sed, vulputate urna. Vestibulum viverra elementum eleifend. 3'}
]

class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            winner:'',
            redo: false,
            buy: false,
            personalityDesc: '',
            personalityResult: '',
            retake:false,
            quantity: 1
        }
        this.handleRedo = this.handleRedo.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
        this.handleRetake = this.handleRetake.bind(this);
        this.minus = this.minus.bind(this);
        this.plus = this.plus.bind(this);
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
      this.props.transferFinalResult(newResult);
      this.props.transferQuantity(this.state.quantity);
      this.setState({
        buy:true
      })
    }
    handleRetake(e){
      e.preventDefault()
      this.setState({
        retake: true
      })
    }
    plus(e){
      e.preventDefault()
        let amount = this.state.quantity
        if(amount < 10){
          amount++
        }
        this.setState({
          quantity: amount
        })
    }
    minus(e){
      e.preventDefault()
        let amount = this.state.quantity
        if(amount >= 1){
          amount--
        }
        this.setState({
          quantity: amount
        })
    }
    componentDidMount() {
      let quizResult = this.props.quizResult;
      let randomWinner =  Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      let winnerObject = '';
      let personality = '';
      let result = '';
      if(quizResult === "one"){
        winnerObject = one[randomWinner];
        personality = confident;
        result = confResult;
      }else if(quizResult === "two"){
        winnerObject = two[randomWinner];
        personality = adaptable;
        result = adaptResult;
      }else if(quizResult === "three"){
        winnerObject = three[randomWinner];
        personality = independent;
        result = indResult;
      }else if(quizResult === "four"){
        winnerObject = four[randomWinner];
        personality = shy;
        result = shyResult;
      }else if(quizResult === "five"){
        winnerObject = five[randomWinner];
        personality = happy;
        result = happyResult;
      }else{
        winnerObject = all[randomWinner];
        personality = confident;
        result = confResult;
      }
      this.setState({
        winner:winnerObject,
        personalityDesc: personality,
        personalityResult: result
      })
    }
    redoWinner() {
      let quizResult = this.props.quizResult;
      let randomWinner =  Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      let winnerObject = '';
      let personality = '';
      if(quizResult === "one"){
        winnerObject = one[randomWinner];
        personality = confident;
      }else if(quizResult === "two"){
        winnerObject = two[randomWinner];
        personality = adaptable;
      }else if(quizResult === "three"){
        winnerObject = three[randomWinner];
        personality = independent;
      }else if(quizResult === "four"){
        winnerObject = four[randomWinner];
        personality = shy;
      }else if(quizResult === "five"){
        winnerObject = five[randomWinner];
        personality = happy;
      }else{
        winnerObject = all[randomWinner];
        personality = confident;
      }
      this.setState({
        winner:winnerObject,
        personalityDesc: personality
      })
    }

    render() {
      const{buy} = this.state;
        if(buy){
          return <Redirect to ='/confirmation'/>
        }
      const{retake} = this.state;
        if(retake){
          return <Redirect to ='/'/>
        }
      return (
        <div className="result container-fluid">
        <div className="row">
          <h1 className="col-md-12 text-center resultDog">{this.props.dogName} {this.state.personalityResult} </h1>
        </div>
        <div className="row">
          <h2 className="col-md-12 winnerTitle"> {this.state.winner.title} </h2>
        </div>
        <div className="row">
          <img className="col-md-4 column1" alt="winner" src={this.state.winner.url} />
          <div className="col-md-4 column2">
            <h4>Item Description</h4>
            <p className="desc">"{this.state.winner.desc}" </p>
            <p> Size: (sizing guide)</p>
            <ul className="list-inline">
              <li className="size list-inline-item active">XS</li>
              <li className="size list-inline-item"> S </li>
              <li className="size list-inline-item"> M </li>
              <li className="size list-inline-item"> L </li>
            </ul>
            <div className="input-group input-group-sm quantity">
              <p> Price: {this.state.winner.cost}.00 </p>
              <span className="input-group-btn">
                <button onClick={(e) => this.minus(e)} type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                <span><i className="fa fa-minus" aria-hidden="true"></i></span>
                </button>
                </span>
                <input type="text" name="quant[1]" className="form-control input-number" value={this.state.quantity} min="1" max="10"/>
                <span className="input-group-btn">
                <button onClick={(e) => this.plus(e)} type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                    <span> <i className="fa fa-plus" aria-hidden="true"></i></span>
                  </button>
              </span>
            </div>
            <button className="button1" onClick={(e) => this.handleBuy(e)}>Buy it</button>
            <button className="button2"> Save </button>
          </div>
          <div className="col-md-4 column3">
            <h4>Personality Description</h4>
            <p className="personDesc">"{this.state.personalityDesc}"</p>
            <button className="button1" onClick={(e) => this.handleRedo(e)}>Show Another</button>
            <button className="button2" onClick={(e) => this.handleRetake(e)}>Retake Quiz</button>
          </div>
        </div>

        </div>
      );
    }
}

export default Result;
