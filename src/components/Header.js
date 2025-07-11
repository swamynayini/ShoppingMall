import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
const Header = ({setPresentUser}) => {
  const handleSignOut=()=>{
    signOut(auth).then(() => setPresentUser(null));
  };
  
  return (
    <div className=' md:mx-2 md:py-2 md:px-8 '>
      <div className='h-48 w-28'>
        <img className='h-48 w-96 object-cover' alt='logo' src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg' />
       </div>  
       <div className='flex flex-row text-lg md:ml-[70rem] md:mt-[-7rem] cursor-pointer'>
        <ul className=' flex flex-row space-x-4'>
            <li><Link to ="/">Home</Link> </li>
        </ul>
        <button onClick={handleSignOut} className="md:bg-red-500 md:text-white md:px-4 md:py-2 rounded md:ml-[3.5rem]">
        Sign Out
      </button>
        </div>   
    </div>
  )
}

export default Header
