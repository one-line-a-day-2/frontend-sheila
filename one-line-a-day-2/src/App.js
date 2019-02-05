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





class App extends Component {


render() {
    return (
      <div className="App">
      {/* <h1> LOGIN </h1> */}
        {/* <Login /> */}
        <NavBar />
        <Switch>
        <Route path='/login' component={Login} /> 
        <Route path='/signup' component={SignUp}/>
        <Route path='/' component={HomePage}/>

        <Route path='/createentry' component={CreateEntry}/>        
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
