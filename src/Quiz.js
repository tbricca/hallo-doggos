import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      selectedOptionQ1: 'option1',
      selectedOptionQ2: 'option1',
      selectedOptionQ3: 'option1',
      selectedOptionQ4: 'option1',
      selectedOptionQ5: 'option1',
      selectedOptionQ6: 'option1',
      redirect: false,
      result: ''
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
    //result logic here



    this.setState({
      redirect: true,
      result: 'xyz'
    })
    let newResult = this.state.result;
    this.props.transferResult(newResult)
  }



  render() {
    const{redirect} = this.state;
    if(redirect){
      return <Redirect to ='/result'/>
    }
    return (
      <div className="App">
      <h1> Hallo Doggo </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus felis purus, quis blandit augue ornare et. Maecenas iaculis metus rhoncus nibh blandit, non ultrices diam posuere. Quisque at tellus quis sem tristique interdum. Sed non felis quam. Cras eu felis eros. Suspendisse a vestibulum lectus.</p>
      <form onSubmit={this.handleSubmit}>
        <div className="name">
        <label>
          Dog Name:
        <input
          type="text"
          name="name"
          placeholder="Fido"
          value={this.state.name}
          onChange={this.handleOptionChange} />
        </label>
        </div>
        <div className="Q1"> Question 1
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
        <div className="radio">
          <label>
            <input type="radio"
            name="selectedOptionQ1"
            value="option4"
            checked={this.state.selectedOptionQ1 === 'option4'}
            onChange={this.handleOptionChange}
            />
            Option 4
            </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio"
            name="selectedOptionQ1"
            value="option5"
            checked={this.state.selectedOptionQ1 === 'option5'}
            onChange={this.handleOptionChange}
            />
            Option 5
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
      <div className="radio">
        <label>
          <input type="radio"
          name="selectedOptionQ2"
          value="option4"
          checked={this.state.selectedOptionQ2 === 'option4'}
          onChange={this.handleOptionChange}
          />
          Option 4
          </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio"
          name="selectedOptionQ2"
          value="option5"
          checked={this.state.selectedOptionQ2 === 'option5'}
          onChange={this.handleOptionChange}
          />
          Option 5
          </label>
      </div>
    </div>


    <div className="question"> Question 3:
      <div className="radio">
        <label>
          <input
            type="radio"
            name="selectedOptionQ3"
            value="option1"
            checked={this.state.selectedOptionQ3 === 'option1'}
            onChange={this.handleOptionChange}
             />
            Option 1
        </label>
      </div>
    <div className="radio">
      <label>
        <input
          type="radio"
          name="selectedOptionQ3"
          value="option2"
          checked={this.state.selectedOptionQ3 === 'option2'}
          onChange={this.handleOptionChange}
        />
        Option 2
        </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio"
        name="selectedOptionQ3"
        value="option3"
        checked={this.state.selectedOptionQ3 === 'option3'}
        onChange={this.handleOptionChange}
        />
        Option 3
        </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio"
        name="selectedOptionQ3"
        value="option4"
        checked={this.state.selectedOptionQ3 === 'option4'}
        onChange={this.handleOptionChange}
        />
        Option 4
        </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio"
        name="selectedOptionQ3"
        value="option5"
        checked={this.state.selectedOptionQ3 === 'option5'}
        onChange={this.handleOptionChange}
        />
        Option 5
        </label>
    </div>
  </div>


  <div className="question"> Question 4:
    <div className="radio">
      <label>
        <input
          type="radio"
          name="selectedOptionQ4"
          value="option1"
          checked={this.state.selectedOptionQ4 === 'option1'}
          onChange={this.handleOptionChange}
           />
          Option 1
      </label>
    </div>
  <div className="radio">
    <label>
      <input
        type="radio"
        name="selectedOptionQ4"
        value="option2"
        checked={this.state.selectedOptionQ4 === 'option2'}
        onChange={this.handleOptionChange}
      />
      Option 2
      </label>
  </div>
  <div className="radio">
    <label>
      <input type="radio"
      name="selectedOptionQ4"
      value="option3"
      checked={this.state.selectedOptionQ4 === 'option3'}
      onChange={this.handleOptionChange}
      />
      Option 3
      </label>
  </div>
  <div className="radio">
    <label>
      <input type="radio"
      name="selectedOptionQ4"
      value="option4"
      checked={this.state.selectedOptionQ4 === 'option4'}
      onChange={this.handleOptionChange}
      />
      Option 4
      </label>
  </div>
  <div className="radio">
    <label>
      <input type="radio"
      name="selectedOptionQ4"
      value="option5"
      checked={this.state.selectedOptionQ4 === 'option5'}
      onChange={this.handleOptionChange}
      />
      Option 5
      </label>
  </div>
</div>


<div className="question"> Question 5:
  <div className="radio">
    <label>
      <input
        type="radio"
        name="selectedOptionQ5"
        value="option1"
        checked={this.state.selectedOptionQ5 === 'option1'}
        onChange={this.handleOptionChange}
         />
        Option 1
    </label>
  </div>
<div className="radio">
  <label>
    <input
      type="radio"
      name="selectedOptionQ5"
      value="option2"
      checked={this.state.selectedOptionQ5 === 'option2'}
      onChange={this.handleOptionChange}
    />
    Option 2
    </label>
</div>
<div className="radio">
  <label>
    <input type="radio"
    name="selectedOptionQ5"
    value="option3"
    checked={this.state.selectedOptionQ5 === 'option3'}
    onChange={this.handleOptionChange}
    />
    Option 3
    </label>
</div>
<div className="radio">
  <label>
    <input type="radio"
    name="selectedOptionQ5"
    value="option4"
    checked={this.state.selectedOptionQ5 === 'option4'}
    onChange={this.handleOptionChange}
    />
    Option 4
    </label>
</div>
<div className="radio">
  <label>
    <input type="radio"
    name="selectedOptionQ5"
    value="option5"
    checked={this.state.selectedOptionQ5 === 'option5'}
    onChange={this.handleOptionChange}
    />
    Option 5
    </label>
</div>
</div>


<div className="question"> Question 6:
  <div className="radio">
    <label>
      <input
        type="radio"
        name="selectedOptionQ6"
        value="option1"
        checked={this.state.selectedOptionQ6 === 'option1'}
        onChange={this.handleOptionChange}
         />
        Option 1
    </label>
  </div>
<div className="radio">
  <label>
    <input
      type="radio"
      name="selectedOptionQ6"
      value="option2"
      checked={this.state.selectedOptionQ6 === 'option2'}
      onChange={this.handleOptionChange}
    />
    Option 2
    </label>
</div>
<div className="radio">
  <label>
    <input type="radio"
    name="selectedOptionQ6"
    value="option3"
    checked={this.state.selectedOptionQ6 === 'option3'}
    onChange={this.handleOptionChange}
    />
    Option 3
    </label>
</div>
<div className="radio">
  <label>
    <input type="radio"
    name="selectedOptionQ6"
    value="option4"
    checked={this.state.selectedOptionQ6 === 'option4'}
    onChange={this.handleOptionChange}
    />
    Option 4
    </label>
</div>
<div className="radio">
  <label>
    <input type="radio"
    name="selectedOptionQ6"
    value="option5"
    checked={this.state.selectedOptionQ6 === 'option5'}
    onChange={this.handleOptionChange}
    />
    Option 5
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
