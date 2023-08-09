import React from 'react'
import '../assets/css/Login_Page.css'
import Login from'./Login'
import Profile from './Profile'
import { useAuth0 } from '@auth0/auth0-react'

export default function Login_Page() {
  const {isAuthenticated}=useAuth0();
  var disable=true;
  const {isLoading}=useAuth0();

  if(isLoading) return <div>Loading...</div>
  
  return (
        <>        
          <h2 className='title fs.1' >Welcome to Rick and Morty API </h2>      
          <div className='btn-container'>
            <Login/>           
          </div>
          
          <Profile className='m-2'/> 
          <div class="space stars1"></div>
          <div class="space stars2"></div>
          <div class="space stars3"></div>
        </>

  )
}
