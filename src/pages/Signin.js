import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Google from '../components/Google';

export default function Signin() {

  const [formdata, setFormdata] = useState({});

  const handleChange=(e)=>{
    setFormdata({
      ...formdata,
      [e.target.id]:e.target.value
    })
  }
  console.log(formdata)

  const handleSubmit=async(e)=>{
    e.preventDefault()
    await axios.post('http://localhost:3000/admin/signup',formdata)
    .then(result => console.log(result))
    .catch((error) => {
      if (error.response) {
        console.log("Response status:", error.response.status);
        console.log("Response data:", error.response.data);
      } else {
        console.error("An error occurred:", error);
      }
    });
    }  
  
  return (
    
    <div className=' text-center my-60'>
      <h1 className='mb-6 text-black font-semibold text-center text-3xl'>Sign in</h1>
    
      <div className=' max-w-lg mx-auto '>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
          <input onChange={handleChange} type='text' className=' rounded-lg border p-3 flex-shrink-0' placeholder='Enter your Email' id='email'/>
          <input onChange={handleChange} type='text' className=' rounded-lg border p-3' placeholder='Enter your Username' id='userName'/>
          <input onChange={handleChange} type='password' className=' rounded-lg border p-3' placeholder='Enter your password' id='password'/>
          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign up</button>
          <Google/>
        </form>
      </div>
      <div className='flex gap-2 mt-5 justify-center ml-5 mr-80'>
        <p className='text-lg'>Have an account?</p>
        <Link to={'/login'}>
          <span className='text-lg text-blue-700'>Sign in</span>
        </Link>
      </div>
        
      </div>  
  )
}
