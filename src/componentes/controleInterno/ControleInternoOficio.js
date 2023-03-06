import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Loading from '../Loading'
const ControleInternoOficio = () => {
    const [dados, setDados ] = useState('')
    const [removeLoading, SetRemoveLoading] = useState(false)
      useEffect(() => {
         setTimeout(()=>{

          fetch(`http://10.0.0.179:3000/controleinterno/oficio/${localStorage.getItem('oficio')}`)
          .then((response) => response.json())
          .then((json) => { 
            setDados(json)
            SetRemoveLoading(true);
          })      

         },3000)
      }, []);
      console.log(dados.arquivo)

     

        return (
    <div>
{dados && dados.arquivo.map((a)=>(
<li key={a.id}> 
    {a.oficio}<br/>

  <a href={`http://10.0.0.179:3000/${a.anexo}`} target='_blank'  download> DOWNLOAD</a>

   
</li>   
))}
  {!removeLoading && <Loading />}
    </div>
  )
}

export default ControleInternoOficio