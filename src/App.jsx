import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home />}>
        </Route>
      </Routes>   
    </Router>
  );
}

export default App;
