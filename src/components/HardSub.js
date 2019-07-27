import React, { Component } from 'react'
import TestComponent from './TestComponent';

export default class HardSub extends Component {

  render() {

    console.log("HardSub's props: ", this.props.tasks);

    let listItem = this.props.tasks.map((item, index) => {
        return <TestComponent key={index} {...item} />
    })

    return (
      <div>
        Lista alkaa tästä..
        <ul>
          {listItem}
        </ul>
      </div>
    )
  }
}
