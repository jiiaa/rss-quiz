import React, { Component } from 'react'

export default class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userScore: props.location.state.userScore
  }
}

  render() {
    console.log(this.state.userScore);
    return (
      <div>
        ScoreBoard
        <br/>
        {this.state.userScore.score}
      </div>
    )
  }
}
