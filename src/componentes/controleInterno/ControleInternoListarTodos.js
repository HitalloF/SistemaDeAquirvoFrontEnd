import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
const ControleInternoListarTodos = () => {
    const [dados, setDados] = useState('')
    const number = [1,23,4,5]


    React.useEffect(() => {
        fetch(`http://10.0.0.179:3000/controleinterno/arquivos`)
          .then((response) => response.json())
          .then((json) => setDados(json));
      }, []);

   

  return (

    <section>
      {number.map((n)=> <li key={n.toString}>{n}</li>)}
    
      {dados &&
        dados.map((p) => (
          <NavLink
            key={p.id}
            to={ `${p.id}`}
          >
            {p.oficio}
          </NavLink>
        ))}


  <h1>Hitallo</h1>
    </section>  
  )
}

export default ControleInternoListarTodos