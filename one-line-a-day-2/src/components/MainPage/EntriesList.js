import React from 'react';
import EntrySummary from './EntrySummary';

const EntriesList = props => {
    return (
        <div className='cards'>

         {props.entries.map(entry => {
            return(
            <h5 key={entry.id} > {entry.entry} </h5> 
            )
        })}



        
        </div>
    )

}

export default EntriesList;


// <div className="card">
 
 
// </div> 