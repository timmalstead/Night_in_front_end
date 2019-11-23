
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
    showRegister : false
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

  render() {
  return (
    <div>
      <Navbar logIn ={this.logIn}/>
      {this.state.showLogIn ? <Login register = {this.register}/> : null}
      {this.state.showRegister ? <Register /> : null}
      <div style={{'display': 'flex', 'margin' : '1em'}}>
        <MovieContainer />
        <RecipeContainer />
      </div>
    </div>
  );
  }
}

export default App;