import React, { Component } from 'react'
import './styles/hard.css';
import HardSub from '../components/HardSub';

export default class Hard extends Component {
  state = {
    tasks: [
      { name: "Task #1", category: "wip", bgcolor: "yellow"},
      { name: "Task #2", category: "wip", bgcolor: "pink"},
      { name: "Task #3", category: "complete", bgcolor: "skyblue"}
    ]
  }


  render() {
    
    console.log("Hard's state: ", this.state.tasks);
    
    return (
      <div>
        HARD is..
        <HardSub {...this.state} />
      </div>
    )
  }
}
