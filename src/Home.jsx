import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = ({userDetails1}) => {
  // const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const nav = useNavigate();
  
  const validation = () =>{
    
    if( name2 == "") alert("enter the name dood")
    else{
      const wish = {name2};
      userDetails1(wish);
    nav('/Wish');}
}
  return (
 <div className='container-fluid bg-dark'>
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
    <div className='login1 bg-danger '>
        <form>
        <div className='form-group mb-2 d-flex justify-content-center row'>
           <label htmlFor="text" className='form-label label1 '>Name Please...</label> <br />
           <input type="text" placeholder='Enter your Name'
           onChange={(e) => setName2(e.target.value)}
           className="form-control input1" required
         /> 
        </div>

        <button  className='btn btn-success mt-4 w-100 btnbtn'
        onClick={()=>{validation()}} >let's go</button>
        </form>
        </div>
        </div>
        </div>    
  )
}

export default Home