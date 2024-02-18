import React from 'react'
import Person from './Person'

function NameList() {

    const persons = [
        {
            id: 1,
            name: 'bheem',
            age: 25,
            skill: "laddu "
        },

        {
            id: 2,
            name: 'raju',
            age: 12,
            skill: "lollypop"
        },
        {
            id: 3,
            name: 'kalia',
            age: 55,
            skill: "murga"
        },
    ]
    // const names = ['aryan' , 'saket' , 'prabhat']
    // const NameList =  names.map(name => <h2>{name}</h2>)
    const personList = persons.map(x => (
        <Person  person = {x}/>
    ))
    return (
        <div>
            {
                personList
            }

            {/* <h2>{names[0]}</h2>
     <h2>{names[1]}</h2>
     <h2>{names[2]}</h2> */}
        </div>
    )
}

export default NameList
