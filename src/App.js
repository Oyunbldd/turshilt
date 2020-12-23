import './App.css';
import Home from './pages/home';
import {TasksProvider } from './pages/provider'
import {BrowserRouter as Router,useHistory} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <TasksProvider>
        <Home />
        </TasksProvider>
      </header>
     </div>
    </Router>
  );
}
export default App;
