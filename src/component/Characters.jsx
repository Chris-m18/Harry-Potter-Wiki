import React from 'react'
import { Link } from 'react-router-dom'


export default function Characters(props) {
  return (
    <div className="characters">
      {props.charactersArray.map(Characters => (
        <Link>
        <div className="character">
          <img src={Characters.image} alt="" s />
          <h3>{Characters.name}</h3>
          </div>
          </Link>
        
        ))}


    </div>
  )
}
