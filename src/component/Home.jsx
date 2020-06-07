import React from 'react'
import { Link } from "react-router-dom"
import './css/home.css'

export default function Home() {
  return (
    <div className='home'>
      <Link to='/Characters'>
        <button className='button' >Enter</button>
      </Link>
  
    </div>
  )
}
