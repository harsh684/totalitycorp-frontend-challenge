import axios from 'axios'
import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail]= useState();
    const [password, setPassword]= useState();
    const navigate= useNavigate();

    axios.defaults.withCredentials = true;
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://e-commerce-api-alpha.vercel.app/login', {email , password})
        .then((result)=>{
            console.log(result)
            if(result.data==="Success"){
                navigate('/')
            }
        })
        .catch((err)=>{console.log(err)});
    }
  return (
    <div className='loginsignup w-full md:pb-20 md:h-fit md:pt-24 bg-zinc-100 py-10 md:py-0'>
      <div className="loginsignup-container bg-white md:m-auto py-4 px-4 mx-5 md:py-8 md:px-14 md:h-fit md:w-[580px] rounded md:rounded-none">
        <h1 className='md:my-5 font-semibold text-xl md:text-2xl'>Login</h1>
        <div className="loginsignup-fields flex flex-col gap-3 md:gap-8 my-4 md:mt-10 ">
          <form onSubmit={handleSubmit} className='flex flex-col gap-3 md:gap-8' action="POST">
            <input className='h-9 md:h-14 text-sm md:text-lg border border-slate-200 ps-2 md:ps-5' type="email" placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)} />
            <input className='h-9 md:h-14 text-sm md:text-lg border border-slate-200 ps-2 md:ps-5' type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit' className='w-1/2 py-2 mt-1 mb-6 md:mb-0 md:w-full md:h-14 md:my-5 text-white bg-black text-sm md:text-lg font-medium cursor-pointer'>Continue</button>
          </form>
        </div>
        <p className='loginsignup-login md:mt-5 text-gray-400 text-sm md:text-lg font-medium'>Don't have an account? <Link to='/signup'><span className='text-red-400 cursor-pointer'><u>SignUp here</u></span></Link></p>
        <div className="loginsignup-agree flex items-center mt-3 md:mt-6 gap-2 text-gray-400 text-xs md:text-base font-medium">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to use the terms of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Login
