import React from 'react'
import { useForm } from 'react-hook-form';
import ControleInternoOficio from './ControleInternoOficio';

const ControleInternoPesquisa = () => {
	const {register, handleSubmit, formState: {erros}} = useForm()

	const addPost =  data => {
		
		const formData = new FormData()
		formData.append('oficio', data.oficio)
		window.localStorage.setItem('oficio',  data.oficio)
	}
  
	return (
	  <div >
			
		<form onSubmit={handleSubmit(addPost)}>
		  
	  <div >
		<h1>INFORMAÇÕES DO OFICIO</h1>
		  <label>Oficio:  </label>
		  <input type='number' name="oficio" {...register("oficio")}/>
	  </div>
	 	  <div>
		<button type='submit'>PESQUISAR OFICIO</button>
	  </div>
	  </form>
  
		<ControleInternoOficio />

	  </div>
	)
  }
export default ControleInternoPesquisa