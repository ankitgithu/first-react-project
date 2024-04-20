import React from 'react'
import Navbar from './Navbar'

const App = () => {
    return (
    <div>
      
    <Navbar></Navbar>

     <Myname/>

    </div>
  )
}

export default App

function Myname(){
  return(
    <>
    <h1 >I am Here</h1>
    </>
  )
}