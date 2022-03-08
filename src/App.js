import React from 'react';
import Home from './components/Home';
import './App.css';
import Log from './components/Log';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
  
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/log">log in</Link>
        </li>
      </ul>

      <hr />

     
         <Routes>
         <Route path='/' element={<Home/>} />

         <Route exact path='/home' element={<Home/>} />
        <Route exact path='/log' element={<Log/>} />
      
           
           
           </Routes>
      
    </div>
  </Router>
    
    
  

  );

}

export default App;