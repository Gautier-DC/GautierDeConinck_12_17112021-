import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import Home from './pages/Home';
import { getUser } from './callAPI';


function App() {

  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    getUser(18)
    .then((response) =>{
      console.log('*****', response);
      setCurrentUser(response.data.data)
    })
    .catch(error => {
      console.log(error);
  });
  }, []);

  useEffect(() => {
    console.log('userInfo', currentUser)
  }, [currentUser]);

  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home user={currentUser}/>}>
        </Route>
      </Routes>   
    </Router>
  );
}

export default App;
