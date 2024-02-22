import React, { Component } from 'react'

 class ClickedCounterTwo extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        count: 0
     }
   }

   increment = () => {
    this.setState(prevState =>{
        return {count: prevState + 1}
    })
   }
   
  render() {
    const {count} = this.state
    return (
      <div>
        <button onClick={this.increment}> click {count} times</button>
      </div>
    )}
}
export default ClickedCounterTwo
