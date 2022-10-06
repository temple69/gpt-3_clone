import React from 'react'
import { useState } from 'react'
import  classes from './header.module.css'



const Header = () => {
  const [toggle,setToggle] = useState(false)
 
  const browserHandler=()=>{
    setToggle(!toggle)

  }
  return (
    <header className={classes.header}>
         <ul className={classes.mobile_design}>
          <li><strong>GPT-3</strong></li>
          <button onClick={browserHandler}>{toggle?"-":"+"}</button>
          </ul> 
        <nav>
          <ul>
                <li><strong>GPT-3</strong></li>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">What is GPT?</a></li>
                  <li><a href="#">Open AI</a></li>
                  <li><a href="#">Case Studies</a></li>
                  <li><a href="#">Library</a></li>
                  <li><a href="#">Sign in</a></li>
                  <button><a href="#">Sign up</a></button>
            </ul>
            {/* Mobile responsive design */}
            {toggle&&(
            <ul className={toggle?classes.anime:''}>
                <li><strong>GPT-3</strong></li>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">What is GPT?</a></li>
                  <li><a href="#">Open AI</a></li>
                  <li><a href="#">Case Studies</a></li>
                  <li><a href="#">Library</a></li>
                  <li><a href="#">Sign in</a></li>
                  <button><a href="#">Sign up</a></button>
            </ul>)}
           
        </nav>
         
        
        
    </header>
  )
}

export default Header