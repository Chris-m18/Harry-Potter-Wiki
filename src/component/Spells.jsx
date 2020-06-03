import React from 'react'

export default function Spells(props) {
  return (
    <div className="tricks">
    {props.spellArray.length > 0 && props.spellArray.map(Spells=> (
      <div className="treat">
        <h1>{Spells.spell}</h1>
        <h3>Effect:   {Spells.effect}</h3>
        <h3>Type:    {Spells.type}</h3>
        </div>
      
      
      ))}


  </div>
  )
}


