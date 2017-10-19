import React, { Component } from 'react';
import './App.css';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      selectedOptionQ1: 'option1',
      selectedOptionQ2: 'option1'
    }
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOptionChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }
  render() {
    return (
      <div className="App">
      <form onSubmit={this.handleSubmit}>
        <div className="name">
        <label>
          Dog Name:
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleOptionChange} />
        </label>
        </div>
        <div className="Q1"> dog name: {this.state.name}
          <div className="radio">
            <label>
              <input
                type="radio"
                name="selectedOptionQ1"
                value="option1"
                checked={this.state.selectedOptionQ1 === 'option1'}
                onChange={this.handleOptionChange}
                 />
                Option 1
            </label>
          </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="selectedOptionQ1"
              value="option2"
              checked={this.state.selectedOptionQ1 === 'option2'}
              onChange={this.handleOptionChange}
            />
            Option 2
            </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio"
            name="selectedOptionQ1"
            value="option3"
            checked={this.state.selectedOptionQ1 === 'option3'}
            onChange={this.handleOptionChange}
            />
            Option 3
            </label>
        </div>
      </div>
      <div className="Q2"> Question 2:
        <div className="radio">
          <label>
            <input
              type="radio"
              name="selectedOptionQ2"
              value="option1"
              checked={this.state.selectedOptionQ2 === 'option1'}
              onChange={this.handleOptionChange}
               />
              Option 1
          </label>
        </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            name="selectedOptionQ2"
            value="option2"
            checked={this.state.selectedOptionQ2 === 'option2'}
            onChange={this.handleOptionChange}
          />
          Option 2
          </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio"
          name="selectedOptionQ2"
          value="option3"
          checked={this.state.selectedOptionQ2 === 'option3'}
          onChange={this.handleOptionChange}
          />
          Option 3
          </label>
      </div>
    </div>
    <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
    </form>
      </div>
    );
  }
}
export default Quiz;
