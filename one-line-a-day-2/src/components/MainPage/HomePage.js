 import React, { Component } from 'react';
// import EntrySummary from './EntrySummary';
import { connect } from 'react-redux';
import EntriesList from '../MainPage/EntriesList';
import CreateEntry from '../MainPage/CreateEntry';
import { fetchEntry, deleteEntry, updateEntry, createEntry} from '../store/actions/entryActions';



class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            entry: '',
            activeEntry: null
        }
    }


 componentDidMount() {
     this.props.fetchEntry(this.props.userId);
 }   


 deleteEntry = (e, entryId) => {
     e.preventDefault()
     this.props.deleteEntry(this.props.userId, entryId)
 }



 updateEntry = entry =>{
    // e.preventDefault();
    // const entryUpdate = this.props.entries.find(entryItem => entryItem.id === entry.id)
    // this.props.updateEntry(this.props.userId, entry)

    this.setState({ entry: entry.entry, isEditing: true, activeEntry: entry.id })
}

newUpdate = () => {
    const entry = this.props.entries.find(entry => entry.id === this.state.activeEntry)
    const updatedEntry = {...entry, entry: this.state.entry }
    this.props.updateEntry(this.props.userId, updatedEntry)
    this.setState({entry:'', isEditing: false, activeEntry: null})
}


// this is for the add entry after changing it from the route //
handleSubmit = () => {
    console.log(this.state)
//    e.preventDefault();
   this.props.createEntry(this.props.userId, {
       entry: this.state.entry,
       user_id: this.props.userId
   })

//    this.props.fetchEntry();
//    this.props.history.push('/')
  }


  handleChanges = e => {
    console.log(e);
    e.preventDefault();
    this.setState({
        [e.target.name]: e.target.value
    })}

// end of create entry form props


    render(){
    console.log(this.props)  
      
    return (
        <div className="home-page">
            
            <CreateEntry updateEntry={this.updateEntry} newUpdate={this.newUpdate} entry={this.state.entry} isEditing={this.state.isEditing} handleSubmit={this.handleSubmit} handleChanges={this.handleChanges} />
            <EntriesList entries={this.props.entries} deleteEntry={this.deleteEntry} updateEntry={this.updateEntry}/>

        </div>
        )
    }
}



const mapStateToProps = (state) => {
    return{
      entries: state.entry.entries,
      fetchEntry: state.entry.fetchEntry,
      userId: state.auth.userId,
      isUpdating:  state.entry.isUpdating
      
    }
}


export default connect(mapStateToProps,
    {fetchEntry, deleteEntry,updateEntry, createEntry})(HomePage);


