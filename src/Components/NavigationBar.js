import React, { useState } from 'react'
import './NavigationBar.css'
function NavigationBar() {
    
  

  return (
   <>
    <div className='container-fluid'>
      
      <div className='row ' id='Nav'>
        <h6   id='logo' className='col-3'>GYM FLUENCER</h6>
        <div className='col-6 ' id='box1'>
          <button onClick={()=>{}} >Features</button>
          <button onClick={()=>{}} >Diet Plan</button>
          <button onClick={()=>{}} >WorkOut Plans</button>
          <button onClick={()=>{}} >Blog</button>
          <button onClick={()=>{}} >FAQs</button>
          <button onClick={()=>{}} >ContactUs</button>
        </div>
        <div className='col-3 ' id='box2'>
          <button onClick={()=>{}} >Get Started</button>
          <button onClick={()=>{}} >Login</button>
        </div>
      </div>
        
    </div>
   
   </>
  )
}

export default NavigationBar
