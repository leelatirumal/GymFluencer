import React from 'react'
import './Main.css'
import Part1 from './Part1'

import Part3 from './Part3'
import NavigationBar from './NavigationBar'

function Main() {
  return (
    <>
    <NavigationBar/>
    <div className='container1'>
    <h3 id='title1'>Don'T Sit </h3>
    <h3 id='title2'>Get Fit</h3>

    
    <h4 className='heading'>
      YOUR FITNESS
      JOURNEY BEGINS HERE
    </h4>
    <p className='p'>
      Our state of the art facilities and expert trainers are here to help 
      you achieve your fitness goals,no matter your starting point.<br/>
      <br/>
      <a href='' className='btn btn-outline-info'>Explore for more</a>

    </p>



    </div>
   
    
    <Part1/>
    </>
  )
}

export default Main
