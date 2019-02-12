 import React, { Component } from 'react';
// import EntrySummary from './EntrySummary';
import { connect } from 'react-redux';
import EntriesList from '../MainPage/EntriesList';
import { fetchEntry, deleteEntry } from '../store/actions/entryActions';



class HomePage extends Component {


 componentDidMount() {
     this.props.fetchEntry(this.props.userId);
 }   


 deleteEntry = (e, entryId) => {
     e.preventDefault()
     this.props.deleteEntry(this.props.userId, entryId)
 }
    
    render(){
    console.log(this.props)  
    // const { entries } = this.props  
    return (
        <div>
            <h1>HOME</h1>
            {/* <EntrySummary /> */}
            <EntriesList entries={this.props.entries} deleteEntry={this.deleteEntry} />

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
    {fetchEntry, deleteEntry})(HomePage);


