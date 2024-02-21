import React, { Component } from 'react'
// import UpdatedComponent from './WithCounter'
import WithCounter from './WithCounter'

class HoverCounter extends Component {
     // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count : 0
    //     }
    //   }
  
    //   increment = () => {
    //       this.setState(prevState => {
    //       return { count : prevState.count + 1}
    //       })
    //     }
  render() {
    // const { count } = this.state
    const { count,increment } = this.props  // Destructuring perfomed
    return (
      <div>
        <h2 onMouseOver={increment}>  hovered {count} times</h2>   
           </div>
    )
  }
}

export default WithCounter(HoverCounter,10)
