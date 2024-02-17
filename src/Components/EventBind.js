import React, { Component } from 'react'

class EventBind extends Component {
   
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'hello'
      }
    //   this.clickHandler = this.clickHandler.bind(this)
    }
//   tareeka no. 4 by making it in a arrow function
    clickHandler = () => {
        this.setState({
            message:'goodbye'
        })
        console.log(this)
    }
    

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* tareek no.1 */}
        {/* <button onClick={this.clickHandler.bind(this)}> click my </button> */}
        {/* tareeka no.2 */}
        {/* <button onClick={() => this.clickHandler()}> click my </button> */}
        {/* tareeka no. 3  iske aage ka constructor me likhna hoga */}
        <button onClick={this.clickHandler}> click my </button>

      </div>
    )
  }
}

export default EventBind
