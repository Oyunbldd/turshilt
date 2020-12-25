import React  from 'react'
    import { useContext, useEffect, useState } from "react"
    import {firebase,db} from '../firebase'
const AddDoc=()=>{
   const darsan=()=>{
    const lol={
        name:'FBI',
        teacher:'teacher',
    }
    db.collection('/users').add(lol)
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
   }
    return(
        <div>
            Turshilt    
            <button onClick={darsan}></button>
        </div>
    )
}
export default AddDoc