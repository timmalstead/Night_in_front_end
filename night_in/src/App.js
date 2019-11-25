
//Parent Container
import React, { Component } from 'react';
import './App.css';
import MovieContainer from './MovieContainer';
import Register from './Register';
import Login from './Login'
import Navbar from './Navbar'
import RecipeContainer from './RecipeContainer'


//Parent Container
class App extends Component {
  
  state = {
    showLogIn : false,
    showRegister : false,
    isLogged : false,
    loggedUserId : undefined
  }

  logIn = () => {
    this.setState({
      showLogIn : true
    })
  }

  register = () => {
    this.setState({
      showRegister : true
    })
  }

  
  doUpdateCurrentUser = userId => {
    this.setState({
      loggedUserId : userId,
      isLogged : true
    })
    console.log(userId)
  }
  logoutCurrentUser= () => {
    this.setState({
      loggedUserId : undefined,
      isLogged : false
      
    })
  }

  render() {
  return (
    <div>
      <Navbar isLogged={this.state.isLogged} logIn ={this.logIn} logoutCurrentUser = {this.logoutCurrentUser}/>
      {this.state.showLogIn ? <Login register = {this.register} doUpdateCurrentUser = {this.doUpdateCurrentUser} /> : null}
      {this.state.showRegister ? <Register doUpdateCurrentUser = {this.doUpdateCurrentUser} /> : null}
      <div className="main-app" style={{'display': 'flex', 'margin' : '1em'}}>
        <MovieContainer isLogged = {this.state.isLogged} loggedUserId={this.state.loggedUserId}/>
        <RecipeContainer isLogged = {this.state.isLogged} loggedUserId={this.state.loggedUserId}/>
      </div>
    </div>
  );
  }
}

export default App;