import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }

      this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childkaNaam) {
        alert(`hello ${this.state.parentName} from ${childkaNaam}`)
    }

  render() {
    return (
      <div>
        <ChildComponent greetHandler = {this.greetParent}/>
      </div>
     
    )
  }
}

export default ParentComponent
