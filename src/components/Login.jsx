    import React from 'react'
    import { useAuth0 } from '@auth0/auth0-react';

    export default function Login ()  {
        const {loginWithRedirect, isAuthenticated}= useAuth0();
      return (
        !isAuthenticated &&(   
          <> 
          <h4>Login with your google account </h4>     
          <button className='btn-login' onClick={()=>loginWithRedirect()}>Login</button>
          </> 
        )
        
      )
      
    }
    
     

    