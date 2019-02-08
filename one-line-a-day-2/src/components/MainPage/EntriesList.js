import React from 'react';
import EntrySummary from './EntrySummary';

const EntriesList = props => {
    return (
        <div className='cards'>

        {props.entries.map(entry => {
            return(
            <h2 key={entry.id} > {entry.entry} </h2> 
            )
        })}



        {/* <EntrySummary />
        <EntrySummary />
        <EntrySummary />
        <EntrySummary />  */}


{/* <EntrySummary  */} 
{/* //mapped through for the summary card save for later possibly  */}
        
        </div>
    )

}

export default EntriesList;


// <div className="card">
 
 
// </div> 