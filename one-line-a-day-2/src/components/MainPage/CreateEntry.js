import React from 'react'; 
// import axios from 'axios';
// import { connect } from 'react-redux';
// // import { createEntry } from './components/store/actions/entryActions';
// import { createEntry, fetchEntry } from '../store/actions/entryActions';


function CreateEntry(props) {
    const handleClick = e => {
        e.preventDefault();
        if (props.isEditing) {
            props.newUpdate();
        }else{
            props.handleSubmit();
        }
    }




    return (
        <div className="createContainer">

        <form onSubmit={props.handleSubmit}>
        <h2 className='deep-purple-text text-darken-2'> {props.isEditing ? 'Update Entry' : 'Create An Entry'} </h2>

        <input 
                    name='entry'
                    type='text'
                    value={props.entry}
                    placeholder='Start here...'
                    onChange={props.handleChanges}
                />

              
               
            
                <button onClick={handleClick} className='btn grey darken-4 z-depth-0'type='submit'> {props.isEditing ? 'Update' : 'Create'} </button>       



        </form>
            

        </div>
    )
}


export default CreateEntry;
