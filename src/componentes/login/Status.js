import React, {useState,useContext, useEffect, useRef} from 'react'
import { AccountContext } from './Account'

const Status = () => {
    const [status, setStatus] = useState(false);
    const {getSession, logout} = useContext(AccountContext)

    useEffect(()=>{
        getSession().then((session)=>{      
            console.log("Session: ", session);
            setStatus(true)
            localStorage.setItem("logado", true)
        })  
    },[])
      

    return <div> {status ? <button onClick={logout}>logout</button> : "FAÇA O LOGIN!"} </div>         

}



export default Status