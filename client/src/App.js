import React from 'react';
import './App.css';
import Dashboard from './features/Dashboard';
import { ApexChartOsStatic } from './features/pieCahrts/pieChartOs';


function App() {
  return (
    <div className="App">
        <Dashboard/>
        <ApexChartOsStatic/>      
    </div>  
  );
}

export default App;
