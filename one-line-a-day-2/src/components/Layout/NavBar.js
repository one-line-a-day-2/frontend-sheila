  import React from 'react';
  import { Route,  Link } from 'react-router-dom';
  import SignedIn from './SignedIn';
  import SignedOut from './SignedOut';
 

  
  const NavBar = () => {
      return (
         <nav  className='nav-wrapper lime lighten-1 ' >
         <div>
            <Link to='/login'></Link> 
            <SignedIn />
            <SignedOut />
       
            
            
         </div>
         
         </nav>
      )
  }

  export default NavBar;