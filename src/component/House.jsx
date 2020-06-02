import React from 'react'
import { Link } from 'react-router-dom'


export default function House(props) {
  return (
    <div>
       <div className="houses">
      {props.housesArray.map(House => (
        <Link to={`/House/${House.id}`}>
        <div className="house">
          <img src={House.image} alt="" s />
          <h3>{House.name}</h3>
          </div>
          </Link>
        
        ))}


    </div>
    </div>
  )
}
