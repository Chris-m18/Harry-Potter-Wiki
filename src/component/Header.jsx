import React from 'react'
import { Link } from "react-router-dom"
import './css/header.css'


export default function Header() {
  return (<>
   
      <div className="header">
      <header>Harry Potter Wiki </header>

     <div className="link">
 
     <Link className="one" to='/Characters'>
       Characters
      </Link>
      <Link className="two" to='/House'>
        House
      </Link>
      <Link className="three" to='/Spells'>
        Spells
        </Link>
       
      </div>
      </div>
   
    </>
  )
}
