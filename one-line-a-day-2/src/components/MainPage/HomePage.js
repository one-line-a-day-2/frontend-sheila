import React, { Component } from 'react';
// import EntrySummary from './EntrySummary';
import { connect } from 'react-redux';
import EntriesList from '../MainPage/EntriesList';



class HomePage extends Component {
    
    render(){
    console.log(this.props)    
    return (
        <div>
            <h1>HOME</h1>
            {/* <EntrySummary /> */}
            <EntriesList />

        </div>
        )
    }
}



const mapStateToProps = (state) => {
    return{
      entries: state.entry.entries
    }
}


export default connect(mapStateToProps)(HomePage);


