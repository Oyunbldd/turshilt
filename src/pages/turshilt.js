import React, { useContext } from 'react'
import {TasksContext} from '../pages/provider'
import {firebase,db,storage,auth} from '../firebase'
import {BrowserRouter as router,Switch,Route,useHistory,useRouteMatch,
    useParams
  } from 'react-router-dom'
const Turshilt = () => {
    const history=useHistory()
    const {register}=useContext(TasksContext)
    const {setUser}=useContext(TasksContext)
    const {user}=useContext(TasksContext)
    const darsan=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            setUser(user.email)
            history.push('/nevtersen')
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }
    return (
        <div className='google-container' onClick={darsan}>
            <div className='google'>
            </div>
        </div>
    )
}

export default Turshilt