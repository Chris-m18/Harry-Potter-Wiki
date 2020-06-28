import React from 'react'
import { Link } from 'react-router-dom'
import './css/characters.css'



export default function Characters(props) {
  return (
    <div className="characters">
      {props.charactersArray.map(Character => (
        <Link className="harry" to={'/characters/' + Character.name}>
        <div className="character">
          <img src={Character.image} alt="" s />
          <h3>{Character.name}</h3>
          </div>
          </Link>
        
        ))}


    </div>
  )
}
