import React from 'react'
import './Info.css'
import { FaEnvelope } from "react-icons/fa"
 
function Info() {
  return (
    <div className='container'>
        <h1>Jaden Holt</h1>
        <p className='job'>Frontend Developer</p>
        <p className='website'>jaden.website</p>
        <button><FaEnvelope className='icon' />Email</button>
    </div>
  )
}

export default Info