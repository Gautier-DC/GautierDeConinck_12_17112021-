import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import Home from './pages/Home';
import Connection from './Components/Connection';


function App() {  

  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Connection/>}/>
        <Route path='/:id' element={<Home/>} />
      </Routes>   
    </Router>
  );
}

export default App;
