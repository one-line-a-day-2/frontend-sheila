import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/Layout/NavBar';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import HomePage from './components/MainPage/HomePage';
import CreateEntry from './components/MainPage/CreateEntry';
import EntrySummary from './components/MainPage/CreateEntry';
import EntryDetail from './components/MainPage/EntryDetail';





class App extends Component {


render() {
    return (
      <div className="App">
      {/* <h1> LOGIN </h1> */}
        {/* <Login /> */}
        <NavBar />
        <Switch>
        {/* <EntrySummary /> */}
        <Route path='/login' component={Login} /> 
        <Route path='/signup' component={SignUp}/>
        <Route exact path='/' component={HomePage}/>
        {/* <Route path='/homepage/:id' component={EntryDetail} /> */}
        <Route path='/create' component={CreateEntry}/>        
        </Switch>
      </div>
    );
  }
}


// const mapStateToProps = state =>({


// })

// export default connect(
//   mapStateToProps,
//   {  }
// )(App);

export default App;
