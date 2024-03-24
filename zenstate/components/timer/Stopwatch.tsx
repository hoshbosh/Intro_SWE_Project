
'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import './Stopwatch.css';

const Stopwatch = () => {
  const [time, setTime]=useState(0)
  const [started, setStarted]=useState(false)
  useEffect(()=>{
    const interval=setInterval(()=>{
      if(started){
        if(time==0){
          setStarted(!started)
          console.log("ENDED")
        }else{
          setTime(time-1)
        }
      }
    }, 1000)
    return ()=>clearInterval(interval)
  }, [time, started])
  
  const handleSubmit=(e: React.SyntheticEvent)=>{
    e.preventDefault()
    const formElements=e.target as typeof e.target &{
      minutes:{value:string}
    }
    setTime(parseInt(formElements.minutes.value)*60)
    setStarted(!started)
  }


  return (
    <div className="stopwatch-container">
      <h2 className="stopwatch-header">Timer</h2>
      <div className="stopwatch-frame">
      <div className="stopwatch-time">
        {Math.floor(time / 60) === 0 ? "00" : (Math.floor(time / 60)).toString().padStart(2, '0')}:{time % 60 === 0 ? "00" : (time % 60).toString().padStart(2, '0')}
      </div>
        <form className="stopwatch-form" onSubmit={handleSubmit}>
          <label className="stopwatch-label">
            Enter time in minutes:
            <input name="minutes" type="number" min="1" step="1" className="stopwatch-input" />
          </label>
          <button type='submit' className="stopwatch-button">Start</button>
        </form>
      </div>
      
    </div>
  )
}

export default Stopwatch
