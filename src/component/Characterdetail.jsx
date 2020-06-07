import React from 'react' 
import { withRouter } from "react-router-dom"

function Characterdetail(props) {
  const det = props.details.find(details => {
    return details.name == props.match.params.name
  })
  console.log(det)
  return (<> 
    {det &&
      <div className='details' >
      <h1>{det.name}</h1>
        <h3>Actor:  {det.actor}</h3>
      <h3>Date of Birth:  {det.dateOfBirth}</h3>
      <h3>House:  {det.house}</h3>
      <h3>Species:  {det.species}</h3>
      <img src= {det.image} />
      
   
 

      </div>
    }
    </>
    )
}

export default withRouter(Characterdetail)

