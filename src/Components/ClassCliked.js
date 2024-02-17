import React, { Component } from 'react'

export class ClassCliked extends Component {
    clickHandler(){
        console.log("button is clickded")
    }
  render() {
    return (
      <div>
          <button onClick={this.clickHandler}> click me </button>
      </div>
    )
  }
}

export default ClassCliked
