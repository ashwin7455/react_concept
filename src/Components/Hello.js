import React from 'react'
const Hello = (props) => {
    return (
        <div>
            <h1>hello {props.name} aka {props.heroname}</h1>
            {props.children}
        </div>
    )
  // return React.createElement('div', null , React.createElement('h1',null,'helloRaoSahab'))
}
export default Hello