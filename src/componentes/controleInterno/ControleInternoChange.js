import React from 'react'
import { useForm } from 'react-hook-form';
import styles from './styles/ControleInternoCadastro.module.css'

const ControleInternoChange = () => {
const {register, handleSubmit, formState: {erros}} = useForm()

	const addPost =  data => {
		const formData = new FormData()
		formData.append('oficio', data.oficio)
		formData.append('setor', data.setor)
		formData.append('data', data.data)
		formData.append('anexo', data.anexo[0])


		fetch(`http://10.0.0.179:3000/controleinterno/arquivos/change/${localStorage.getItem('Id')}`, {
			method: 'POST',
			body: formData
		}).then(()=>{
		  console.log("NOVO CLIENTE CADASTRADO")
		})
	}
  
  
	return (
	  <div className={styles.cadastro}>
		
export default Cadastrar
	  <div className={styles.form}>
		
		<form onSubmit={handleSubmit(addPost)}>
		  
	  <div >
		<h1>INFORMAÇÕES DO ANIMAL</h1>
		  <label>Oficio:  </label>
		  <input type='number' name="oficio" {...register("oficio")}/>
	  </div>
	  <div className={styles.form}>
		  <label>Setor:</label>
		  <input type='text' name="setor" {...register("setor")} />
	  </div>
	  <div  className={styles.form}>
		  <label>data:</label>
		  <input type='number' name="data" {...register("data")} />
	  </div>
	  <div  className={styles.form}>
		  <label>documento:</label>
		  <input type="file" name='anexo'{...register("anexo")}  />
	  </div>
	 	  <div className={styles.button}>
		<button type='submit'>Mudar</button>
	  </div>
	  </form>
  
  
	  </div>
	  </div>
	)
  }

export default ControleInternoChange