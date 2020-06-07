import React from 'react'
import { withRouter } from "react-router-dom"

 function Housedetails(props) {
  const casa = props.loco.find(casa => {
    return casa.name == props.match.params.name
  })
   console.log(casa)
  //  let salected; 
  //  if ( casa.name == gryffindor)
   return (<>



  {casa &&
    <div className='detail' >
       <h1>{casa.name}</h1>
       <p>Founder:  {casa.founder}</p>
       <p>Head Of House:  {casa.headOfHouse}</p>
       <p>House Ghost:   {casa.houseGhost}</p>
       <p>Mascot:  {casa.mascot}</p>
       <p>Values:  {casa.values[0]}</p>
       <p>{casa.values[1]}</p>
       <p> {casa.values[2]}</p>
       <p>{casa.values[3]}</p>
       <p>{casa.values[4]}</p>
       
    
 


    </div>
  }
  </>
)
   
  
}
export default withRouter(Housedetails)




