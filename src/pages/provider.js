import React,{createContext,useEffect,useState} from 'react'
import Login from '../components/login';
import {firebase,db,storage,auth} from '../firebase'
import {BrowserRouter as router,Switch,Route,Link ,useHistory } from 'react-router-dom'
export const TasksContext=createContext({
user:[],
register:()=>{},
login:()=>{},
logout:()=>{},
})
export const TasksProvider=({children})=>{
const history=useHistory()
const [user,setUser]=useState(null);
useEffect(()=>{
    if(auth){
        auth.onAuthStateChanged(function(user) {
            if (user) {
              setUser(user.email)
            } else {
              setUser(null)
            }
          });
    }
},[auth])
const register=(a,e)=>{
    auth.createUserWithEmailAndPassword(a,e)
    .then((user) => {
      setUser(user.email)
       history.push('/nevtersen')
       window.location.reload(true);
    })
    .catch((error) => {
      console.log(error)
    });
}
const login=(n,p)=>{
    auth.signInWithEmailAndPassword(n, p)
    .then((user) => {
      history.push('/nevtersen')
      setUser(user)
      window.location.reload(true);
    })
    .catch((error) => {
      alert(error)
    });
}
const logout=()=>{
    auth.signOut().then(function() {
        setUser(null)
      }).catch(function(error) {
      });
}
return(
<TasksContext.Provider value={{user,setUser,register,login,logout}}>{children}</TasksContext.Provider>
    )
}