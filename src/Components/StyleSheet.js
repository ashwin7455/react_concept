import React from 'react'
import './MyStyle.css'

function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div className= {`${className} font-xl`}>
     {/* <h1>StyleSheet</h1>  */}
    </div>
  )
}

export default StyleSheet
