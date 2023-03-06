import React, {useState,useContext, useEffect} from 'react'
import {Navigate, Outlet} from 'react-router-dom'


const  ProtectedRouter =  () => {
 

    let auth ={'token' : localStorage.getItem('logado')}

    return  (  auth.token ? <Outlet/> : <Navigate to="/login"/>)

  

}

export default ProtectedRouter