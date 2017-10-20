import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';

class Confirmation extends Component {
  constructor(props){
    super(props)
    this.state = {
        quantity: this.props.quantity,
        back:false
    }
    const imageObject = this.props.imageResult
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
      if(amount > 1){
        amount--
      }
      this.setState({
        quantity: amount
      })
  }
  back(e){
    e.preventDefault()
    this.setState({
      back:true
    })
  }
  render() {
    let src = '';
    if(this.props.imageResult === ''){
       src = '/placeholder.png'
    }else{
      src =this.props.imageResult.url
    }
    let price = this.props.imageResult.cost * this.state.quantity;
    let tax = price * .096;
    let total = price + tax +10;
    let title = this.props.imageResult.title
    let amount = this.state.quantity
    const{back} = this.state;
    if(back){
      return <Redirect to ='/result'/>
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-md-12"> Checkout </h1>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <img className="img-responsive" src="/breadcrumb.png" alt=""/>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row checkout d-flex align-items-center h100">
          <div className="col-md-1">
          </div>
          <div className="col-md-2">
            <img className="thumbnail img-responsive" alt=" " src={src} />
          </div>
          <div className="col-md-2">
            <p> {title} </p>
          </div>
          <div className="col-md-1">
            <div className="input-group input-group-sm quantity">
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
          </div>
          <div className="col-md-3 text-right">
            {amount}
          </div>
          <div className="col-md-1"><i className="fa fa-times fa-2x" aria-hidden="true"></i></div>
          <div className="col-md-2"></div>
      </div>
        <div className="row price">
          <div className="col-md-7"></div>
          <div className="col-md-2">
            <p> Subtotal: </p>
            <p>Tax: </p>
            <p> Shipping:</p>
            <h5>Total: </h5>
          </div>
          <div className="col-md-2">
            <p> {price} </p>
            <p>{tax} </p>
            <p> 10.00 </p>
            <h5>{total} </h5>
          </div>
          </div>
          <div className="row">
          <div className="col-md-3">
            <button onClick={(e) => this.back(e)} className="confButton"> Back</button>
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-4">
            <button className="confButton"> Continue </button>
          </div>
          </div>
      </div>
    );
  }
}
export default Confirmation;
