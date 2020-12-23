import React, { useContext } from 'react'
import {TasksContext} from '../pages/provider'
const Register = () => {
    const {register}=useContext(TasksContext)
    const darsan=()=>{
        register()
    }
    return (
        <div onClick={darsan} style={{ backgroundColor: 'rgb(77,121,213)', width: '60%', borderRadius: '30px', height: '50px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ fontSize: '24px', color: 'white', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                Register
            </div>
        </div>
    )
}

export default Register