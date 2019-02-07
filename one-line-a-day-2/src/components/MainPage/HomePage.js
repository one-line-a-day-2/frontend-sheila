import React, { Component } from 'react';
import EntrySummary from './EntrySummary';
import { connect } from 'react-redux';
import EntriesList from '../MainPage/EntriesList';
import { fetchEntry } from '../store/actions/entryActions';



class HomePage extends Component {


 componentDidMount() {
     this.props.fetchEntry();
 }   
    
    render(){
    console.log(this.props)  
    const { entries } = this.props  
    return (
        <div>
            <h1>HOME</h1>
            <EntrySummary />
            <EntriesList entires={entries} />

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


