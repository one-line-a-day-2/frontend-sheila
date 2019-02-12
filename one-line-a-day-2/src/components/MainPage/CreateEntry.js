import React from 'react'; 
// import axios from 'axios';
import { connect } from 'react-redux';
// import { createEntry } from './components/store/actions/entryActions';
import { createEntry, fetchEntry } from '../store/actions/entryActions';


class CreateEntry extends React.Component {
  constructor(props) {
    super(props) 
        this.state = {
            entry: ''
            
        }
    }
    
    //  this.onSubmit = this.onSubmit.bind(this);
    // this.handleChanges = this.handleChanges.bind(this)



   handleSubmit = e => {
     console.log(this.state)
    e.preventDefault();
    this.props.createEntry(this.props.userId, {
        entry: this.state.entry,
        userId: this.props.userId
    })

    this.props.fetchEntry();
    this.props.history.push('/')
   }
    
  
  //  handleSubmit = e => {
  //    e.preventDefault();
  //       const endpoint = 'https://one-line-a-day-2.herokuapp.com/api/users/userID/entries';
  //   axios
  //     .post(endpoint, this.state)
  //     .then(res => {
  //       localStorage.setItem("jwt", res.data.token);
  //     })
  //     .then(() => {
  //       this.props.history.push("/");
  //     })
  //     .catch(err => {
  //       console.log({ Error: err });
  //     }); 


    


   


    handleChanges = e => {
        console.log(e);
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })}


render() {

    // const { username, password } = this.state;
    return (
        <div className="createContainer">

        <form onSubmit={this.handleSubmit}>
        <h2 className='deep-purple-text text-darken-2'>Create An Entry:</h2>

        <input 
                    name='entry'
                    type='text'
                    value={this.state.entry}
                    placeholder='Start here...'
                    onChange={this.handleChanges}
                />

              
               
            
                <button className='btn grey darken-4 z-depth-0'type='submit'>Create</button>       



        </form>
            

        </div>
    )
}
} 

const mapStateToProps = state => {
    return{
       fetchEntries: state.entry.fetchEntries,
       entries:state.entry.entries,
       userId: state.auth.userId
    }
}


export default connect(mapStateToProps,{createEntry,fetchEntry})(CreateEntry);