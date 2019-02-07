import React from 'react';
import EntrySummary from './EntrySummary';

const EntriesList = ({entries}) => {
    return (
        <div className='cards'>

        { entries && entries.map(entry => {
            return(
            <EntrySummary entry={entry} key= {entry.id} />
            )
        })}



        {/* <EntrySummary />
        <EntrySummary />
        <EntrySummary />
        <EntrySummary />  */}

        
        </div>
    )

}

export default EntriesList;