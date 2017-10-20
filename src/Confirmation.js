import React, { Component } from 'react';
import './App.css';

class Confirmation extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let src = '';
    if(this.props.imageResult === ''){
       src = '/placeholder.png'
    }else{
      src =this.props.imageResult
    }
    return (
      <div className="App">
        <img alt=" " src={src} />
      </div>
    );
  }
}
export default Confirmation;
