import React from 'react'
import { useForm } from 'react-hook-form';
import styles from './styles/ControleInternoCadastro.module.css'
const CadastrarUsers = () => {
const {register, handleSubmit, formState: {erros}} = useForm()



	const addPost = data => {
	  fetch('http://10.0.0.179:3000/users/save',{
		method: 'POST',
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(data)}).then(()=>{
		  console.log("NOVO CLIENTE CADASTRADO")
		})
	}
  
  
	return (
	  <div className={styles.cadastro}>
		
	  <div className={styles.form}>
		
		<form onSubmit={handleSubmit(addPost)}>
		  
	  <div >
		<h1>INFORMAÇÕES DO ANIMAL</h1>
		  <label>Nome:  </label>
		  <input type='text' name="name" {...register("name")}/>
	  </div>
	  <div className={styles.form}>
		  <label>Idade:</label>
		  <input type='text' name="email" {...register("email")} />
	  </div>
	  <div  className={styles.form}>
		  <label>Raça:</label>
		  <input type='text' name="password" {...register("password")} />
	  </div>
	  <div  className={styles.form}>
		  <label>Tipo:</label>
		  <input type='text' name="confirmpassword" {...register("confirmpassword")} />
	  </div>
	 	  <div className={styles.button}>
		<button type='submit'>CADASTRAR</button>
	  </div>
	  </form>
  
  
	  </div>
	  </div>
	)
  }

export default CadastrarUsers