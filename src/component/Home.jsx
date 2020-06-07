import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className='home'>
      <Link to='/Characters'>
        <button className='button' >Enter</button>
      </Link>
      <p>WELCOME  TO THE WOUNDERFUL WORLD OF HARRY POTTER! <br />This app is ment to infom you muggles on this amazing uninvers. Please feel free to learn about our great wizards .<br/> Almost forgot  Anyone who dared to speak the name and break the Taboo would be hunted down as criminals. </p>
    </div>
  )
}
