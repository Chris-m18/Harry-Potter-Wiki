import React from 'react'

export default function Spells(props) {
  return (
    <div className="tricks">
    {props.spellArray.map(Spells=> (
      <div className="treatr">
       <h3>{Spells.id}</h3>
        </div>
      
      
      ))}


  </div>
  )
}
