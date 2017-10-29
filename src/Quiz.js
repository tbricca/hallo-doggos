import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Zero',
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
    let newRResult = "";
    if(this.state.selectedOptionQ3 === "option1"){
      newRResult = "one"
    }else if(this.state.selectedOptionQ3 === "option2"){
      newRResult = "two"
    }else if(this.state.selectedOptionQ3 === "option3"){
      newRResult = "three"
    }else if(this.state.selectedOptionQ3 === "option4"){
      newRResult = "four"
    }else if(this.state.selectedOptionQ3 === "option5"){
      newRResult = "five"
    }
    this.setState({
      redirect: true,
      result: newRResult
    }, function(){
          let newResult = this.state.result;
          this.props.transferResult(newResult);
          let name= this.state.name;
          this.props.transferName(name)
    })
  }

  render() {
    const{redirect} = this.state;
    if(redirect){
      return <Redirect to ='/result'/>
    }
    return (
      <div className="container-fluid">
      <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="openHeader"> Hallo Doggo </h1>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <img src="/home.jpg" />
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <p className="descriptionP">Need some help coming up with a costume for your dog? <br/>
              HalloDoggo is here to help! Take this easy and fun quiz to determine your dogs personality trait and well match that to the perfect spooky costume that will make everyones head turn.</p>
            </div>
          </div>
      </div>
      <div className="container-fluid">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-7 offset-md-3 text-center">
              <div className="dogName">
                <label>
                  <h4>What's your dog's name?</h4>
                <input
                  type="text"
                  name="name"
                  placeholder="Fido"
                  className="text-center"
                  value={this.state.name}
                  onChange={this.handleOptionChange} />
                </label>
              </div>
            </div>
          </div>



          <div class="quiz-group">
            <div class="row">
              <div className="col-md-7 offset-md-1">
          <div className="quiz-question-strong Q1">When I take {this.state.name} for a walk:
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="selectedOptionQ1"
                value="option1"
                checked={this.state.selectedOptionQ1 === 'option1'}
                onChange={this.handleOptionChange}
                />
                They want to meet everybody they see
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
              They take charge and lead the way
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
              They get excited and distracted by everything they see, smell, and hear
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
              They refuse to walk and want to be carried
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
              They are always right by my side
            </label>
        </div>
        </div>
        </div>
        </div>


        <div class="quiz-group">
            <div class="row">
              <div className="col-md-7 offset-md-1">
          <div className="quiz-question-strong Q2">When it comes to playtime, {this.state.name}:
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="selectedOptionQ2"
                value="option1"
                checked={this.state.selectedOptionQ2 === 'option1'}
                onChange={this.handleOptionChange}
                />
                Is the leader of the pack
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
              Is protective of their toys
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
              Gets too excited and destroys all their toys
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
              Isn’t very interested
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
              Loves to cuddle
            </label>
        </div>
        </div>
        </div>
        </div>

        <div class="quiz-group">
            <div class="row">
              <div className="col-md-7 offset-md-1">
          <div className="quiz-question-strong Q3">{this.state.name}’s favorite activity is:
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="selectedOptionQ3"
                value="option1"
                checked={this.state.selectedOptionQ3 === 'option1'}
                onChange={this.handleOptionChange}
                />
                Playing with their dog friends at the park
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
              Keeping tabs on all neighborhood activity from their favorite window
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
              Meeting new people!
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
              Hanging out with me on the couch
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
              Learning new tricks
            </label>
        </div>
        </div>
        </div>
        </div>

        <div class="quiz-group">
            <div class="row">
              <div className="col-md-7 offset-md-1">
          <div className="quiz-question-strong Q4">When it comes to tricks, {this.state.name}:
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="selectedOptionQ4"
                value="option1"
                checked={this.state.selectedOptionQ4 === 'option1'}
                onChange={this.handleOptionChange}
                />
                Will perform tricks for food
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
              Likes to do tricks if they’re in the mood
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
              Gets distracted because they want all the pets and snuggles
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
              Doesn’t really like to do tricks
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
              Will perform any trick, any time, any where
            </label>
        </div>
        </div>
        </div>
        </div>

        <div class="quiz-group">
            <div class="row">
              <div className="col-md-7 offset-md-1">
          <div className="quiz-question-strong Q5">Which photo most closely resembles {this.state.name}’s reaction to a knock at the door?
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="selectedOptionQ5"
                value="option1"
                checked={this.state.selectedOptionQ5 === 'option1'}
                onChange={this.handleOptionChange}
                />
                <img className="imgQ" src="/question/a.png"/>
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
            <img className="imgQ" src="/question/b.png"/>
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
              <img className="imgQ" src="/question/c.png"/>
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
              <img className="imgQ" src="/question/d.png"/>
            </label>
          </div>
        </div>
        </div>
        </div>

        <div class="quiz-group">
            <div class="row">
              <div className="col-md-7 offset-md-1">
          <div className="quiz-question-strong Q6">Which high school club/organization would {this.state.name} be a member of?
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="selectedOptionQ6"
                value="option1"
                checked={this.state.selectedOptionQ6 === 'option1'}
                onChange={this.handleOptionChange}
                />
                National Honors Society
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
              Math and Science Club
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
              Improv Comedy Club
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
              Dungeons and Dragons Club
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
              Speech and Debate Team
            </label>
        </div>
        </div>
        </div>
        </div>
        <div class="row">
          <div className="col-md-2 offset-md-5">
            <button className="confButton submitQuiz" onClick={(e) => this.handleSubmit(e)}>Submit</button>
          </div>
        </div>
    </form>
    </div>
    </div>
    );
  }
}
export default Quiz;
