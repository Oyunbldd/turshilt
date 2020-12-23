import  React, { useContext } from 'react'
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
    let gg
    const history=useHistory()
    const {user}=useContext(TasksContext)
    console.log(user)
    return(
        <div>
            {user}
        </div>
    )
}
export default Nevtersen