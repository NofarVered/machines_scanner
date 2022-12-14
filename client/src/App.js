import React from 'react';
import './App.css';

import { BrowserRouter as Router,Route} from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { LoginIntro } from './features/LoginIntro/loginIntro';


import DashboardCpm from './features/DashboardCpm';
import DashboardScans from './features/DashboardScans';
import DashboardAccounts from './features/DashboardAccounts';
import DashboardStatic from './features/DashboardStatics';
import DashboardMachines from './features/DashboardMachines';
function App() {
  return (
    
    <Router>
      <div className="App">        
     
            <Route path='/scan' exact render={()=> <DashboardScans  />}/>          
            <Route path='/' exact render={()=> <LoginIntro />}/>                    
            
            <Route path='/cpm' exact render={()=> <DashboardCpm />}/>
            <Route path='/accounts' exact render={()=> <DashboardAccounts/>}/>
          
            <Route path='/machines' exact render={()=> <DashboardMachines  />}/>
            <Route path='/statistics' exact render={()=> <DashboardStatic  />}/>
        
         
      </div>
      </Router>
    
    
  )  
}

export default App;
