import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import ProtectedRouter from './ProtectedRouter'
import ControleInterno from './controleInterno/ControleInterno'
import { Account } from './login/Account'
import Status from './login/Status'
import Notifications from './Notifications'
import Login from './login/Login'
import ControleInternoCadastro from './controleInterno/ControleInternoCadastro'
import ControleInternoChange from './controleInterno/ControleInternoChange'
import ControleInternoListarTodos from './controleInterno/ControleInternoListarTodos'
import ControleInternoPesquisa from './controleInterno/ControleInternoPesquisa'
import NotFound from './NotFound'


const Rotas = () => {
    return (
        <div className="App">
          <BrowserRouter>
        <Account>
        <Routes>  <Route path='/login' element={<Login />} /></Routes>
          <Status/>
      
          <Routes>
            <Route element={<ProtectedRouter/>}>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/controleinterno' element={<ControleInterno/>} />
            <Route path='/notifications' element={<Notifications/>} />
            <Route path='/controleinterno/cadastrar' element={<ControleInternoCadastro/>} />
            <Route path='/controleinterno/arquivos/change' element={<ControleInternoChange/>} />
            <Route path='/controleinterno/arquivos/todos' element={<ControleInternoListarTodos/>} />
            <Route path='/controleinterno/arquivos/:oficio' element={<ControleInternoPesquisa/>} />
            </Route>
            </Routes>
          </Account>
        </BrowserRouter>
    
    
    
    
        </div>
      )
}

export default Rotas