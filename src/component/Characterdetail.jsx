import React from 'react'
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"

 function Characterdetail(props) {
  return (<>
  
         <div className="detail">
      {/* {props.details.map(Characterdetail => (
        <Link to={`/Characterdetail/${Characterdetail.name}`}>
        <div className="stuff">
          <img src={Characterdetail.image} alt="" s />
          <h3>{Characterdetail.name}</h3>
          </div>
          </Link>
        
        ))} */}

    </div>
    </>
  )
}
export default withRouter (Characterdetail)