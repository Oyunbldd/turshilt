import React, { useContext } from 'react'
import {TasksContext} from '../pages/provider'
import {firebase,db,storage,auth} from '../firebase'
import {BrowserRouter as router,Switch,Route,useHistory,useRouteMatch,
    useParams
  } from 'react-router-dom'
const FB = () => {
    const history=useHistory()
    const {register}=useContext(TasksContext)
    const {setUser}=useContext(TasksContext)
    const darsan=()=>{
        var provider = new firebase.auth.FacebookAuthProvider();
       auth.signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
             setUser(user.email)
            history.push('/nevtersen')
            console.log(user)
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(error)
          });
    }
    return (
        <div onClick={darsan} className='facebook-container'>
            <div >
            </div>
        </div>
    )
}

export default FB