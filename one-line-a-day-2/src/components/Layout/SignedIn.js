import React from 'react';
  import { NavLink} from 'react-router-dom';


  const SignedIn = () => {
    const signout = () =>{
        localStorage.removeItem('jwt')
    }
  

      return (
          <ul className="right">

             <li><NavLink to='/'>Home</NavLink></li>
             <li><NavLink to='/createentry'>Create Entry</NavLink></li>
             <li><NavLink to='/login' exact onClick={signout} >Log Out</NavLink></li>
             <li><NavLink to='/' className= 'btn btn-floating black'>SF</NavLink></li>


          </ul>
    
      )
         
      
  }

  export default SignedIn;