import React, { Component } from 'react'
// import UpdatedComponent from './WithCounter'
import WithCounter from './WithCounter';

class ClickCounter extends Component {
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
    const { count ,increment } = this.props; // Destructuring perfomed
    return (
      <div>
        <button onClick={increment}> 
       {this.props.name} click {count } times 
        </button>
      </div>
    )
  }
}

export default WithCounter(ClickCounter ,5)
