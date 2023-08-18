import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css'
import {useNavigate} from 'react-router-dom'

const Login = ({userDetails}) => {
    const[email, setEmail]= useState("")
    const[password, setPassword]= useState("")
    const[errors, setErrors] = useState([])

    const nav = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate()
        setErrors(errors)
        const details = {email,password}
        userDetails(details);
       if(email && password){
        
        nav('/Home')
       }

    }
    const validate = () => {
       const error =  {};

       if(!email){
        error.email = "email is required";
       }
       else error.email = "";

       
       if(!password){
        error.password = "password is required";
       }
       else error.password = "";
       return error;
    }

return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
    <div className='login'>
        <h2 className='mb-3'>Login form</h2>
        <form  onSubmit={handleSubmit}>
        <div className='form-group mb-2 '>
           <label htmlFor="email" className='form-label'>Email Address</label><br />
           <input type="email"  
           onChange={(e) => setEmail(e.target.value)}
           className={errors.email? 'highlight' : ''}
           /> 
            {errors.email && <div className='error'>{errors.email}</div>}
        </div>

        <div className='form-group mb-2 '>
           <label htmlFor="password" className='form-label'>Password</label> <br />
           <input type="password"
           onChange={(e) => setPassword(e.target.value)}
           className={errors.password ? 'highlight' : ''} /> 
            {errors.password && <div className='error' >{errors.password}</div>}
        </div>

        <button type='submit' className='btn btn-success mt-2 w-100' >submit</button>
        </form>
        
        
    </div>
    </div>
  )
}

 export default Login;