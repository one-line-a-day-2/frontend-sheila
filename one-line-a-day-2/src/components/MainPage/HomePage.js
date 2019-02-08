import React, { Component } from 'react';
// import EntrySummary from './EntrySummary';
import { connect } from 'react-redux';
import EntriesList from '../MainPage/EntriesList';
import { fetchEntry } from '../store/actions/entryActions';



class HomePage extends Component {


 componentDidMount() {
     this.props.fetchEntry(this.props.userId);
 }   
    
    render(){
    console.log(this.props)  
    const { entries } = this.props  
    return (
        <div>
            <h1>HOME</h1>
            {/* <EntrySummary /> */}
            <EntriesList entries={this.props.entries} />

        </div>
        )
    }
}



const mapStateToProps = (state) => {
    return{
      entries: state.entry.entries,
      fetchEntry: state.entry.fetchEntry,
      userId: state.auth.userId
    }
}


export default connect(mapStateToProps,
    {fetchEntry})(HomePage);


