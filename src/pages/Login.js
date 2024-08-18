import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Login() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.id]: e.target.value
    });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/admin/login', formdata);
      console.log('Login Response:', response.data);       

      if (response.data.status) {
        window.localStorage.setItem("loggedinuser", formdata.email);
        navigate('/home'); // Navigate to the home page upon successful login
      } else {
        alert('Email Or Password Does not Match');
        console.log('Incorrect');
      }
    }catch (error) {
      if (error.response && error.response.status === 401) {
        // Handle 401 status (Unauthorized)
        alert('Email or Password does not match');
        console.log('Incorrect credentials');
      } else {
      console.error('An error occurred:', error);
      // Handle error, e.g., display an error message to the user
    }
  }}

  return (
    <div className=' text-center my-60'>
      <h1 className='mb-6 text-black font-semibold text-center text-3xl'>Log in</h1>
    
      <div className='max-w-lg mx-auto'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input onChange={handleChange} type='text' className='rounded-lg border p-3 flex-shrink-0' placeholder='Enter your Email' id='email' />
          <input onChange={handleChange} type='password' className='rounded-lg border p-3' placeholder='Enter your password' id='password' />
          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Login</button>
        </form>
      </div>
      <div className='flex gap-2 mt-5 justify-center ml-6 mr-96'>
        <Link to={'/forgot-password'}>
          <span className='text-lg text-blue-700'>Forgot Password?</span>
        </Link>
      </div>
      <button onClick={()=>navigate('/profile')}>Profile</button>
      <button onClick={()=>navigate('/cart')}>Cart</button>
      </div>
  );}
