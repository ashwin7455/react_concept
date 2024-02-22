import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    increment = () =>{
        this.setState(prevState => {
            return {count: prevState + 1}
        })
    }
  render() {
    const {count} = this.state
    return (
      <div>
        <button onMouseOver={this.increment}> hovered  {count} times</button>
      </div>
    )
  }
}

export default HoverCounterTwo
