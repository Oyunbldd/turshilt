import React, { useCallback, useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {TasksContext} from '../pages/provider'
const Logout = () => {
    const {logout}=useContext(TasksContext)
    const darsan=()=>{
        logout()
    }
    return (
        <Router>
        <div onClick={darsan} style={{ backgroundColor: 'rgb(77,121,213)', width: '60%', borderRadius: '30px', height: '50px', display: 'flex', justifyContent: 'center',margin:'10px' }}>
            <div style={{ fontSize: '24px', color: 'white', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                <Link to='/logout'>Logout</Link>
            </div>
        </div>
        </Router>
    )
}

export default Logout