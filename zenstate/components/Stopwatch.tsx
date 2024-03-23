
'use client'
import React from 'react'
import { useState, useEffect } from 'react'
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
    <div>Stopwatch
      <form onSubmit={handleSubmit}>
        <label>
          Enter time in minutes:
            <input name="minutes"/>
        </label>
      <button type='submit'>Start</button>
      </form>
      {Math.floor(time/60)==0?"00":(Math.floor(time/60)).toString().padStart(2,'0')}:{time%60==0?"00":(time%60).toString().padStart(2, '0')}
    </div>
  )
}

export default Stopwatch