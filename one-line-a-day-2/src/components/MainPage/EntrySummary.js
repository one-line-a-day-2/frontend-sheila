import React from 'react';

const EntrySummary = ({entry}) => {
    return (
       
  <div className="card">

  <div className="card-image waves-effect waves-block waves-light">
    <img className="activator" src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1586&q=80" alt="" width='42'/>
  </div>

  <div className="card-content">
    <span className="card-title activator grey-text text-darken-4">Edge of Jupiter<i class="material-icons right">more_vert</i></span>
    {/* <p><a href="#">remember</a></p> */}
  </div>

  <div className="card-reveal">
    <span className="card-title grey-text text-darken-4">Edge of Jupiter<i class="material-icons right">close</i></span>
    <p>I remember when I was sitting there. There on the ledge of the suns horizon not only contemplating but retracing all of the pre-destined steps that life had on the journey set before me.</p>
  </div>
</div> 

    )
}

export default EntrySummary;