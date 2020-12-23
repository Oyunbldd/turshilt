import React, { useContext } from 'react'
import {TasksContext} from '../pages/provider'
const Login = () => {
    const {login}=useContext(TasksContext)
    const darsan=()=>{
        login()
    }
    return (
        <div onClick={darsan} style={{ backgroundColor: 'rgb(77,121,213)', width: '60%', borderRadius: '30px', height: '50px', display: 'flex', justifyContent: 'center', margin:'10px' }}>
            <div style={{ fontSize: '24px', color: 'white', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                Login
            </div>
        </div>
    )
}

export default Login