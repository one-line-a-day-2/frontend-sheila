import React from 'react';
// import EntrySummary from './EntrySummary';

const EntriesList = props => {
    return (
        <div className='cards'>

         {props.entries.map(entry => {
            return(
            <div>
            <h5 key={entry.id} > {entry.entry} </h5>

            <button>Delete</button> 
            </div>
            )
        })}



        
        </div>
    )

}

export default EntriesList;


// <div className="card">
 
 
// </div> 