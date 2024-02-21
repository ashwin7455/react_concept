import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class ClickCounter extends Component {
  render() {
     // const { count } = this.state
    const { count ,increment } = this.props;
    return (
      <div>
        <button onClick={increment}>click {count } times </button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter)
