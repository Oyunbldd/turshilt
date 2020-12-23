import React, { useContext, useEffect, useState } from 'react'
import {TasksContext} from './provider'
import Turshilt from './turshilt'
import FB from './fb'
import {firebase,db,storage,auth} from '../firebase'
import {BrowserRouter as router,Switch,Route,useHistory,useRouteMatch,
    useParams
  } from 'react-router-dom'
const Input=()=>{
     const{setUser}=useContext(TasksContext)
     const {user}=useContext(TasksContext)
     const {logout}=useContext(TasksContext)
     useEffect(()=>{
       logout()
     },[])
    const history=useHistory()
      const {login}=useContext(TasksContext)
      const [ner,setNer]=useState('')
      const [pass,setPass]=useState('')
      const username=(e)=>{
          setNer(e.target.value);
      }
      const password=(p)=>{
          setPass(p.target.value)
      }
      const darsan=()=>{
          if(ner.length>=8 && pass.length>=8){
            login(ner,pass)
          }
      }
      const shine=()=>{
        history.push('/burtguuleh')
      }
return(
    <div className='input-container'>
        <input placeholder='Email or phone number' onChange={username}  className='a'/>
        <input placeholder='Password' type='password' onChange={password} className='a'/>
        <button className='tsenher' onClick={darsan}>Log In</button>
        <div className='zuraas'></div>
        <button onClick={shine} className='nogoon'>Create New Account</button>
        <div className='hajuu'>
        <Turshilt/>
        <FB/>
        </div>  
    </div>
)
}
export default Input