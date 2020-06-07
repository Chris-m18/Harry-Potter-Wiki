import React from 'react'
import { Link } from 'react-router-dom'


export default function House(props) {
  let gryffindor = ('https://media.giphy.com/media/GvMo19TyWuMiQ/giphy.gif')
  let slytherin = ('')
  return (
    <div>
       <div className="houses">
      {props.housesArray.map(House => (
        <Link to={'/houses/' + House.name}>
        <div className="house">
          <img src={'gryffindor' + House.image} alt="" s />
            <h3>{House.name}</h3>
            
          </div>
          </Link>
        
        ))}


    </div>
    </div>
  )
}
