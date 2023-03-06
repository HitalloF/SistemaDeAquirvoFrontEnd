import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles/ControleInterno.module.css'


const ControleInterno = () => {
    // const [id, setId] = useState('')
    const [ultimo, setUltimo] = useState('')
    const [dados, setDados] = useState('')
    const [notficacoes, setNotficacoes] = useState('')
   // Puxar o ultimo
    React.useEffect(() => {
      fetch(`http://10.0.0.179:3000/controleinterno/arquivos`)
        .then((response) => response.json())
        .then((json) => setUltimo(json));

    }, []);
    const IdLast = ultimo[ultimo.length-1]
    console.log(IdLast)
  
    

  function handleClick(event) {
    event.preventDefault();
    const id = event.target.name;
    window.localStorage.setItem('id', id);
 
  }

  return (
    <div className={styles.controleinterno}>
      <h1>CONTROLE INTERNO</h1>
    <div className={styles.controle}>
    <ul className={styles.list}>
      <li>LISTAR</li>
      <li>CADASTRAR</li>
      <li>PESQUISAR</li>
      <li>NOTIFICAÇÕES</li>
    </ul>
    </div>
    {IdLast ? <h1>{IdLast.oficio}</h1> : "Hello" }
    <div className={styles.controledown}>

      <div className={styles.ultimas}>
    <h1>ULTIMOS OFICIOS</h1>
      <div>
        <div>
        <h1>OFICIO</h1> 
        <h1></h1>


        <p>Número do Oficio: {dados.oficio}</p>
        <p>Setor: {dados.setor}</p>
        <p>Data: {dados.data}</p>
        <p>Anexo: <a href={`http://10.0.0.179:3000/${dados.anexo}`} target='_blank' download>PDF DOWNLOAD</a></p>
        </div>
      </div>
      </div>
      <div className={styles.notficacoes}>
      <h1>NOTIFICAÇÕES</h1>
        </div>
    </div>
    </div>
  )
}

export default ControleInterno