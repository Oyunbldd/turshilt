import React, { useContext } from 'react'
import {TasksContext} from '../pages/provider'
import {firebase,db,storage,auth} from '../firebase'
import {BrowserRouter as router,Switch,Route,useHistory,useRouteMatch,
    useParams
  } from 'react-router-dom'
const FB = () => {
    const history=useHistory()
    const {register}=useContext(TasksContext)
    const darsan=()=>{
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            history.push('/nevtersen')
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
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