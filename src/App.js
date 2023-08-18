
import './App.css';
import Login from './Login';
 import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import { useState } from 'react';
import Wish from './Wish';

function App() {
  const [user, setUser] = useState([])
  const userDetails = (details) =>{
    setUser([...user,details])
  }
  const [user1, setUser1] = useState([])
  const userDetails1 = (wish) =>{
    setUser1([...user1,wish])
  }

  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Login userDetails={userDetails}></Login>}></Route> */}
        <Route path='/' element={<Home userDetails1={userDetails1}></Home>}></Route>
        <Route path='/Wish' element={<Wish user1={user1}></Wish>}></Route>
        
      </Routes>
      
    </div>
  );
}

export default App;

