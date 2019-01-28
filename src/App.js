import React, { Component } from 'react';
import './App.css';
import Question from './Question';

class App extends Component {
  constructor(){
    super();
    this.state = {
      formTitle: "Title",
      formDesc: 'Form Description',
      question: [],
      questionOption: '',
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
  }

  handleTitleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,      
    })
  } 
  
  newQuestion = (e) => {
    e.preventDefault();
    const addQuestion = {
      value: this.state.questionOption,
    };
    const newQuestion = Array.from(this.state.question);
    newQuestion.push(addQuestion);
    this.setState({
      question: newQuestion,
      questionOption: ""
    })
  }

  removeQuestion = (itemClicked, index) => {
    let newQuestion = Array.from(this.state.question);
    let item = itemClicked
    let newList = newQuestion.splice(item, 1);

    this.setState({
      question: newList
    })
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="wrapper">
          <div className="left">
            <form action="" className="formCard" onChange={this.handleFormSubmit} autoComplete="off">
              <input type="text" onChange={this.handleTitleChange} name="formTitle" placeholder="Title" className="inputTitle"/>
              <input type="text" onChange={this.handleTitleChange} name="formDesc" placeholder="Form Description" className="inputFormDesc"/>
            </form>
          </div>
  
          <div className="right">
            <h3 className="title">{this.state.formTitle}</h3>
            <p className="formDesc">{this.state.formDesc}</p>
          </div>
        </div>
        <div className="question">
          {this.state.question.map((q, index) => {
            return <Question questionArray={this.state.question} change={this.handleTitleChange} answer={this.state.answerTitle} question={q} remove={this.removeQuestion} i={index} key={index}/>
          })}
        </div>
        <button className="addQuestion" onClick={this.newQuestion}>ADD QUESTION</button>
      </div>
    );
  }
}

export default App;
