import React from 'react';
import './App.css';
import Dashboard from './features/Dashboard';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { LoginIntro } from './features/LoginIntro/loginIntro';


function App() {
  return (
    <Router>

      <div className="App">
         <Route path='/' exact render={()=> <LoginIntro />}/>
         <Route path='/Dashboard' exact render={()=> <Dashboard />}/>
      </div>
    
    </Router> 
  )  
}

export default App;
