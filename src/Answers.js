import React from 'react';
// import Questions from './Question';

export default class Answers extends React.Component {
  constructor(props) {
    super(props)
    console.log('answers', this.props);
  }
  render() {
    return (
      <div className="questionCard">
        <p>{this.props.titleChange}</p>
        <p>hasdfasdf</p>
      </div>
    )
  }
}