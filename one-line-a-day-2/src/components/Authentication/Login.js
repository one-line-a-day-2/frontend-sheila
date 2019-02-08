import  React from 'react'; 
import axios from 'axios';
import { fetchLogin } from '../store/actions/entryActions'
import { connect } from 'react-redux';



class Login extends React.Component {
  constructor(props) {
    super(props) 
        this.state = {
            username: '',
            password: ''
            
        }
    }
    
 
    componentDidUpdate(prevProps, prevState){
        if(localStorage.getItem('jwt')){
            this.props.history.push('/')
        }
    }
    

   handleSubmit = e => {
     e.preventDefault();
       this.props.fetchLogin
       ({username: this.state.username, password: this.state.password})

    


   }


    handleChanges = e => {
        console.log(e);
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })}


render() {

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


const mapsStateToProps = state => ({
    fetchLogin: state.auth.fetchLogin
})

export default connect(
    mapsStateToProps,
    { fetchLogin }
) (Login);
