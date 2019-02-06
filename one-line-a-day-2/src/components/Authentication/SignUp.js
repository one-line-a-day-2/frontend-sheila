import  React from 'react';   
import axios from 'axios';
// import { connect } from 'react-redux';
// import { } from './actions';




class SignUp extends React.Component {
    constructor(props) {
    super(props) 
        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: ''            
        }
    
    //  this.onSubmit = this.onSubmit.bind(this);
    // this.handleChanges = this.handleChanges.bind(this)
    
    }

   handleSubmit = e => {
       e.preventDefault();
       console.log(this.state);
       const endpoint = 'https://one-line-a-day-2.herokuapp.com/api/register';
       axios
         .post(endpoint, this.state)
         .then(res => {
           console.log(res);
         })
         .then(() => {
           this.props.history.push("/");
         })
         .catch(err => {
           console.log({ Error: err });
         });
     

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
        <div className="signUpForm">

        <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>

        <input 
                    name='firstname'
                    type='text'
                    value={this.state.firstname}
                    placeholder='First Name'
                    onChange={this.handleChanges}
                />

                <input 
                    name='lastname'
                    type='text'
                    value={this.state.lastname}
                    placeholder='Last Name'
                    onChange={this.handleChanges}
                />

                  <input 
                    name='email'
                    type='text'
                    value={this.state.email}
                    placeholder='Email'
                    onChange={this.handleChanges}

                    
                />


                <input 
                    name='username'
                    type='text'
                    value={this.state.username}
                    placeholder='Username'
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
