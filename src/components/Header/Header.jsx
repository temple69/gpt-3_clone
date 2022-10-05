import React from 'react'
import { useState,useEffect } from 'react'
import  classes from './header.module.css'



const Header = () => {
  const [toggle,setToggle] = useState(true)
  const [limit,setLimit] = useState(0)
  useEffect(()=>{
    window.addEventListener('resize',(e)=>{
      setLimit(e.target.innerWidth)
      if(e.target.innerWidth<768){
        setToggle(false)

      }
      else{
        setToggle(true)
      }
})
    window.addEventListener('load',(e)=>{
     setLimit(e.currentTarget.innerWidth)
     console.log(e.currentTarget.screen)
     if (e.currentTarget.innerWidth<768) {
      setInterval(setToggle(false),500)
      
    }
    else{
      setToggle(true)
    }
  })
  
  },[limit])
  const browserHandler=()=>{
    if(limit<768){
    setToggle(!toggle)
    }
    else{
      setToggle(true)

    }
  }
  return (
    <header className={classes.header}>
         <ul className={classes.mobile_design}>
          <li><strong>GPT-3</strong></li>
          <button onClick={browserHandler}>{toggle?"-":"+"}</button>
          </ul> 
        <nav>
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