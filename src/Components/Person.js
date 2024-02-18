import React from 'react'

 function Person({person}) {
  return (
    <div>
      <h2>my name is {person.name} , i am of age {person.age} and i used to eat {person.skill}</h2>
    </div>
  )
}
export default Person