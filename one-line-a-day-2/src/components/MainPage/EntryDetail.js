import React from 'react';

const EntryDetail = (props) => {
    const id = props.match.params.id;
    return (
        <div className='cont-sec entry-detail'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                <span className='card-title'> Entry Title </span>
                <p>Lorem ipsum</p>

                </div>
                
                <div className='card-action grey lighten-4 grey-text'>
                <div>Posted by: ActiveUser </div>
                <div>February 5th, 10:00am</div>

                </div>

            </div>


        </div>

    )
}

export default EntryDetail;