import  React from 'react';   
// import { connect } from 'react-redux';
// import { } from './actions';




class SignUp extends React.Component {
    constructor(props) {
    super(props) 
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: ''            
        }
    
    //  this.onSubmit = this.onSubmit.bind(this);
    // this.handleChanges = this.handleChanges.bind(this)
    
    }

   handleSubmit = e => {
       e.preventDefault();
       console.log(this.state);
     

   }


    handleChanges = e => {
        console.log(e);
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })}


render() {

    // const { username, password } = this.state;
    return (
        <div className="signupForm">

        <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>

        <input 
                    name='firstName'
                    type='text'
                    value={this.state.firstName}
                    placeholder='First Name'
                    onChange={this.handleChanges}
                />

                <input 
                    name='lastName'
                    type='text'
                    value={this.state.lastName}
                    placeholder='Last Name'
                    onChange={this.handleChanges}
                />

                  <input 
                    name='email'
                    type='email'
                    value={this.state.email}
                    placeholder='Email'
                    onChange={this.handleChanges}

                    
                />

                <input 
                    name='password'
                    type='password'
                    value={this.state.password }
                    placeholder='Password'
                    onChange={this.handleChanges}
                />
               
            
               <button className='btn grey darken-4 z-depth-0'type='submit'>Login</button>   



        </form>
            

        </div>
    )
}
} 

export default SignUp;
