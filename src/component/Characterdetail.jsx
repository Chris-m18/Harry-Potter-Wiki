import React from 'react' 
import { withRouter } from "react-router-dom"
import './css/charactersdetail.css'

function Characterdetail(props) {
  const det = props.details.find(details => {
    return details.name == props.match.params.name
  })
  console.log(det)
  return (<> 
    {det &&
      <div className='details' >
      <h1>{det.name}</h1>
        <p>Actor:  {det.actor}</p>
      <p>Date of Birth:  {det.dateOfBirth}</p>
      <p>House:  {det.house}</p>
      <p>Species:  {det.species}</p>
      <img src= {det.image} />
      
   
 

      </div>
    }
    </>
    )
}

export default withRouter(Characterdetail)

