import React from 'react'
import { Link } from 'react-router-dom'
import './css/houses.css'


export default function House(props) {
  let Gryffindor = ('https://media.giphy.com/media/GvMo19TyWuMiQ/giphy.gif')
  let Slytherin = ('https://media.giphy.com/media/KzvN3LrGoLtPG/giphy.gif')
  let Ravenclaw =('https://i.imgur.com/ZoDicna.gif')
  let Hufflepuff = ('https://media.giphy.com/media/PMp40oEvNfKve/giphy.gif')
  return (
    <div>
       <div className="houses">
      {props.housesArray.map(House => (
        <Link to={'/houses/' + House.name}>
        <div className="house">
          <img src={eval(House.name)} alt="" s />
          <h3>{House.name}</h3>
          </div>
          </Link>
        
        ))}


    </div>
    </div>
  )
}
