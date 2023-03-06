import React from 'react'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
        <h1>Ops esse pagina não existe</h1>
        <Link to='/'>Volte para o Inicio</Link>
    </div>
  )
}

export default NotFound