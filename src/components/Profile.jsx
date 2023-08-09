import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom';
export default function Profile() {
    const {user, isAuthenticated}=useAuth0();
    var disable;
  return (
    isAuthenticated && (
        <div className='d-flex align-items-center justify-content-center profile-container'>           
            <img className='profile-img' src={user.picture} alt={user.name}/>
            <h5 className='ms-2 fs-1'>Welcome, {user.name}</h5>      
            <button className='btn btn-success ms-4'>
            <Link to="/home" className="navbar-brand text">
            Enter to the Api
            </Link>               
            </button>       
        </div>
    )
  )
}
