import React, { Component } from 'react';
import './App.css';

class Confirmation extends Component {
  constructor(props){
    super(props)
    const imageObject = this.props.imageResult
  }
  render() {
    let src = '';
    if(this.props.imageResult === ''){
       src = '/placeholder.png'
    }else{
      src =this.props.imageResult.url
    }
    let price = this.props.imageResult.cost
    let tax = price * .096;
    let total = price + tax +10;
    let title = this.props.imageResult.title

    return (
      <div className="App">
        <img alt=" " src={src} />
        <h3> {title} </h3>
        <div className="price">
          <p>Price: ${price} </p>
          <p>Tax: ${tax} </p>
          <p> Shipping: $10 </p>
          <hr/>
          <p>Total: ${total} </p>
        </div>
        <button> Check out now </button>
      </div>
    );
  }
}
export default Confirmation;
