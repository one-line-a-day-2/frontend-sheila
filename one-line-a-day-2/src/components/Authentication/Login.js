import  React from 'react'; 
import axios from 'axios';
import { fetchLogin } from '../store/actions/entryActions'
// import { connect } from 'react-redux';



class Login extends React.Component {
  constructor(props) {
    super(props) 
        this.state = {
            username: '',
            password: ''
            
        }
    }
    
    //  this.onSubmit = this.onSubmit.bind(this);
    // this.handleChanges = this.handleChanges.bind(this)
    
    

   handleSubmit = e => {
     e.preventDefault();
        const endpoint = 'https://one-line-a-day-2.herokuapp.com/api/login';
    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
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
        <div className="loginForm">
            

        <form onSubmit={this.handleSubmit}>
        <h1>LOGIN</h1>

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
                    value={this.state.password}
                    placeholder='Password'
                    onChange={this.handleChanges}
                />

               
            
                <button className='btn grey darken-4 z-depth-0'type='submit'>Login</button>       



        </form>
            

        </div>
    )
}
} 




export default Login;
