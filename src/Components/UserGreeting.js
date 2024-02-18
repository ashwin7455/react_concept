import React, { Component } from 'react'

class UserGreeting extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        isLoggedIn: true
     }
   }
   

  render() {
    
    // tareeka no. 4 - short circuit operator

    return this.state.isLoggedIn && <h1>hello panadat</h1>

     // tareeka No. 3 - ternary conditional operator
     
    // return(
    //     this.state.isLoggedIn ?
    //     <h1>hello yadav</h1> :
    //     <h2>hello ahir</h2>
    // )

// tareeka No. 2  - element variable appoach

    // let message   /* message is the variable that stores the element to be rendered*/
    // if(this.state.isLoggedIn){
    //     message =  <h1>hello raosahab</h1>
    // }
    // else{
    //     message = <h2>hello jaat</h2>
    // }
    
    // return(
    //     <div>{message}</div>  /*rendering message*/
    // )

    // tareeka No. 1 - if/else

    // if(this.state.isLoggedIn){
    //  return   <h1>hello raosahab</h1>
    // }
    // else{
    //   return  <h2>hello jaat</h2>
    // }
    // return (
    //   <div>
    //     <h1>hello raosahab</h1>
    //     <h2>hello jaat</h2>
    //   </div>
    // )
  }
}

export default UserGreeting
