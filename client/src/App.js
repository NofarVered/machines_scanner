import React from 'react';
import './App.css';
import Dashboard from './features/Dashboard';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { LoginIntro } from './features/LoginIntro/loginIntro';

import AccountsWrapper from './features/AccountsWrapper';
import StatisticsWrapper from './features/StatisticsWrapper';
import ScansWrapper from './features/ScansWrapper'
import CpmWrapper from './features/CpmWrapper';
import Machineswrapper from './features/MachinesWrapper';
function App() {
  return (
    <Router>

      <div className="App">         
         <Route path='/' exact render={()=> <LoginIntro />}/>
         <Route path='/scan' exact render={()=> <ScansWrapper />}/>
         <Route path='/cpm' exact render={()=> <CpmWrapper />}/>
         <Route path='/accounts' exact render={()=> <AccountsWrapper />}/>
         <Route path='/machines' exact render={()=> <Machineswrapper />}/>
         <Route path='/statistics' exact render={()=> <StatisticsWrapper />}/>  
         <Route path='/Dashboard' exact render={()=> < Dashboard />}/>    
        
         
      </div>
    
    </Router> 
  )  
}

export default App;
