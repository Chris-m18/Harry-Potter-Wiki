import React from 'react'
import { Link } from "react-router-dom"


export default function Header() {
  return (<>
   
      <div className="header">
        <h3>Harry Potter Wiki</h3>
    </div>
     <div className="link">
      <Link to='./Home'>
      Home
      </Link>
      <Link to='./Characters'>
       Characters
      </Link>
      <Link to='./House'>
        House
      </Link>
      <Link to='./Spells'>
        Spells
        </Link>
      
    </div>
    </>
  )
}
