import React, { useContext } from 'react'
import {TasksContext} from '../pages/provider'
const Text=()=>{
    const {user}=useContext(TasksContext)
    let ner=user
    if(ner===null){
        ner='No user'
    }
return (
    <div>
     {ner}
    </div>
)
}
export default Text