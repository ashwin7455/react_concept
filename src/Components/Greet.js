import React from 'react'
// function Greet(){
//     return<h1>hello aryaa</h1>
// }
const Greet = (props) => {
    const {name , heroname} = props
return(
<h1>{name} aka {heroname}</h1>
)
}

export default Greet
