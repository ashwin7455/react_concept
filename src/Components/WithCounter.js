import React from 'react'

const WithCounter = (WrappedComponent , incrementNumber) => {     // WithCounter denotes UpdatedComponent  ---- and WrappedComponent denotes Original Component
   class WithCounter extends React.Component { // Here WithCounter Denotes NewComponent
    constructor(props) {
        super(props)
      
        this.state = {
           count : 0
        }
      }
  
      increment = () => {
          this.setState(prevState => {
          return { count : prevState.count + incrementNumber}
          })
        }
    render(){
        return <WrappedComponent 
        count ={this.state.count} 
        increment = {this.increment}
        {...this.props}
        />
    }
   }
   return WithCounter
}

export default WithCounter