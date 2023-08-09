import React from 'react';
import '../assets/css/Nav.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


export default function Nav() {
  const{logout,user} =useAuth0();

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid ps-4">
            <Link to="/home" className="navbar-brand text">
              Rick & Morty API
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/characters" className="nav-link">
                    Characters
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/search" className="nav-link">
                    Search Characters
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/developer" className="nav-link">
                    Developer
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav" onClick={()=>logout()}>
                <li className="nav-item">
                <Link to="/login" className="nav-link">
                    Log Out
                  </Link>                        
                </li>
              </ul>
              <ul className="navbar-nav" >
                <li className="nav-item profile-img" >  
                <div className='d-flex align-items-center '>           
                  <img className='' src={user.picture} alt={user.name}/>
                  <h5 className='ms-2 fs-1'>{user.name}</h5>
                </div>                  
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
