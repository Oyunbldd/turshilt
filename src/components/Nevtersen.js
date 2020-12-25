import  React, { useContext, useEffect, useState } from 'react'
import {firebase,db,storage,auth} from '../firebase'
import {TasksContext} from '../pages/provider'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,useHistory
  } from "react-router-dom";
const Nevtersen=()=>{
    const [gg,setGg]=useState(0)
    const history=useHistory()
    const {user}=useContext(TasksContext)
    if(user===null){
        history.push('/')
    }
    return(
        <div className='nuur'>
            {user}
        </div>
    )
 
   
}
export default Nevtersen