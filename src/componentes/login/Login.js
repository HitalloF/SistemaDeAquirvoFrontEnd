import React, {useState, useContext} from 'react'
import { AccountContext } from './Account';
import styles from './styles/login.module.css'
import lock from '../../img/icons/senha.svg'
import user from '../../img/icons/user.svg'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const {authenticate} = useContext(AccountContext);


    const onSubmit = (e)=>{
        e.preventDefault();

      authenticate(email,password)
      .then(data=>{
        console.log("Logged in!", data)
      })
      .catch(err=>{
        console.log("Failed to login", err)
      })
    };

  return (
    <section>
      <div className={styles.login}>
        <div className={styles.box}>
       <form onSubmit={onSubmit}>
       <div className={styles.loginbox}><img src={user}/> <label htmlFor='email'>EMAIL:</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className={styles.loginbox}><img src={lock}/>
        <label htmlFor='password'>PASSWORD:</label>
        <input value={password} onChange={(e)=> setPassword(e.target.value)} />
        </div>
         <button className={styles.btn} type='submit'>Login</button>
        </form>
        </div>
        </div>
    </section>
  )
}

export default Login