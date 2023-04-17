import React from 'react'
import { Link } from "react-router-dom";

const EmployeeDash = () => {

  return (
    <div className="link-buttons">
      <Link to="add"><button className="link-button">Lisää työntekijä</button></Link>
      <Link to="list"><button className="link-button">Selaa työntekijöitä</button></Link>
    </div>
  )
}

export default EmployeeDash;