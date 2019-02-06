import React from 'react'; 
import axios from 'axios';
// import { connect } from 'react-redux';



class CreateEntry extends React.Component {
  constructor(props) {
    super(props) 
        this.state = {
            title: '',
            content: ''
            
        }
    }
    
    //  this.onSubmit = this.onSubmit.bind(this);
    // this.handleChanges = this.handleChanges.bind(this)



   handleSubmit = e => {
     console.log(this.state)
    e.preventDefault();
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
        <h2 className='grey-text text-darken-3'>Create An Entry:</h2>

        <input 
                    name='title'
                    type='text'
                    value={this.state.title}
                    placeholder='Title'
                    onChange={this.handleChanges}
                />

                <input 
                    name='content'
                    type='text'
                    value={this.state.content}
                    placeholder='Content'
                    onChange={this.handleChanges}
                />

               
            
                <button className='btn grey darken-4 z-depth-0'type='submit'>Create</button>       



        </form>
            

        </div>
    )
}
} 



export default CreateEntry;