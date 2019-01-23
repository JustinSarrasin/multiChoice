import React from 'react';

export default class Question extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="questionCard">
        <input type="text"/>
        <input type="text"/>
      </div>
    )
  }
}