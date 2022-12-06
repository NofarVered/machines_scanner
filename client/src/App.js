import React from 'react';
import './App.css';
import Dashboard from './features/Dashboard';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
         <Dashboard/>
      </div>
    </Router> 
  )  
}

export default App;
