import  React, { useContext, useState } from 'react'
import {TasksContext}from '../pages/provider'
const Burtgel=()=>{
    const {register}=useContext(TasksContext)
    console.log('aaa')
    const [name,setName]=useState('')
    const [pass1,setPass]=useState('')
    const [pass2,setP2]=useState('')
    const username=(e)=>{
     setName(e.target.value);
    }
    const pass=(el)=>{
        setPass(el.target.value)
    }
    const fpass=(a)=>{
        setP2(a.target.value)
    }
    if(pass1===pass2 && pass1.length>=8){
        register(name,pass1)
    }
    return(
        <div className='register'>
            <input placeholder='Email or Phone number' onChange={username}/>
            <input type='password' placeholder='Password' onChange={pass}/>
            <input type='password' placeholder='Password' onChange={fpass}/>
            <button>Create</button>

        </div>
    )
}
export default Burtgel