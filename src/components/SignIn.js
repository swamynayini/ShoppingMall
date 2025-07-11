import React, { useState } from 'react'
import { auth } from './firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  const [data,setData] = useState({

    email:"",
    password:""
})

const [error,setError] = useState('')
const {email,password} = data;

const changeHadler = e => {
  setData({...data,[e.target.name]:e.target.value})
}
const signIn = async (e) =>{
  e.preventDefault()
  try{
    const userCredention = await signInWithEmailAndPassword(auth,email,password)
    console.log(userCredention.user)
  }catch (err){
    if (err.code === 'auth/user-not-found') {
        setError('No user found with this email.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password.');
      } else {
        setError(err.message); // fallback for other errors
      }
  }
}
const signUp =async (e) =>{
  e.preventDefault()
  try{
    const userCredention =await createUserWithEmailAndPassword(auth,email,password)
    console.log(userCredention.user)
  }catch (err){
    if (err.code === 'auth/email-already-in-use') {
        setError('Email is already in use.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else {
        setError(err.message);
      }
  }
}

  return (
    <div className=''>
      <div className='ml-[42rem] mt-[15rem] w-full max-w-xs'>
        <h1 className='font-bold font-sans text-center text-xl'>ECOMMERCE PLATFORM</h1>
        <form className=' bg-pink-200 px-8 pb-8 mb-4 pt-6 rounded'>
          <h1 className='font-bold text-center text-xl'>Login Form</h1>
          <input className='border m-2 px-4 py-2'  type='text'  name='name' placeholder='Name' /> <br/>
          <input className='border m-2 px-4 py-2'  type='email' value={email} name='email' placeholder='Email' onChange={changeHadler}/> <br/>
          <input className='border m-2 px-4 py-2' type='password' value={password} name='password' placeholder='Password'onChange={changeHadler}/><br/>
          <button className='m-4 border bg-red-600 px-4 py-2 rounded' onClick={signIn} >SingIn</button>
          <button className='m-4 border bg-red-600 px-4 py-2 rounded'  onClick={signUp}>SingUp</button>
          <h3 className='text-center text-sm'>ForgotUser / password</h3>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  )
}

export default SignIn

