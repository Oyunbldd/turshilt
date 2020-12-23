import React from 'react'
import Input from './input'
import Burtgel from '../components/burtgel'
import Nevtersen from '../components/Nevtersen'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
const Home = () => {
    return (
        <Router>
  <div className="container">
            <Switch>
             <Route exact path='/'>
                 <Input/>
             </Route>
             <Route exact path='/burtguuleh'>
                 <Burtgel/>
             </Route>
             <Route exact path='/nevtersen'>
               <Nevtersen/>
             </Route>
            </Switch>
         </div>
        </Router>
    )
}

export default Home