import React, { Component } from 'react'

 class Counered extends Component {
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
    
    return (
      <div>
        {this.props.render(this.state.count , this.increment)}
      </div>
    )
  }
}

export default Counered
