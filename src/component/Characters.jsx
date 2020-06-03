import React from 'react'
import { Link } from 'react-router-dom'


export default function Characters(props) {
  return (
    <div className="characters">
      {props.charactersArray.map(Character => (
        <Link to={'/characters/' + Character.name}>
        <div className="character">
          <img src={Character.image} alt="" s />
          <h3>{Character.name}</h3>
          </div>
          </Link>
        
        ))}


    </div>
  )
}
