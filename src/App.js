
import React, { Component } from 'react';

import './App.css';

import MovieContainer from './MovieContainer';
import Register from './Register';
import Login from './Login'
import Navbar from './Navbar'
import RecipeContainer from './RecipeContainer';
import EditUser from './EditUser';

class App extends Component {
  
  state = {
    showLogIn : false,
    showRegister : false,
    isLogged : false,
    showEditProfile : false,
    loggedUserId : undefined,
    userToEdit: {
      username: '',
      email: ''
    }
  }
  
  universalClose = () => {
    this.setState({
      showLogIn : false,
      showRegister : false,
      showEditProfile : false
    })
  }

  showEditProfileModal = () => {
    this.setState({
      showEditProfile : true
    })
  }

  logIn = () => {
    this.setState({
      showLogIn : true
    })
  }
  
  closeLogIn = () => {
    this.setState({
      showLogIn : false
    })
  }

  register = () => {
    this.setState({
      showLogIn : false,
      showRegister : true
    })
  }

  handleEditChange = e => {
    this.setState({
      userToEdit:  {
        ...this.state.userToEdit,
        [e.currentTarget.name]: e.currentTarget.value
      }
    })
  }
  
  doUpdateCurrentUser = data => {
    this.setState({
      loggedUserId : data.id,
      userToEdit : {
        username:  data.username,
        email : data.email
        },
      
      isLogged : true
    })
    console.log(data)
  }

  editUserInfo = async (e) =>{
    e.preventDefault() 
    try {
      console.log(this.state.userToEdit)
      const editResponse = await fetch(`${process.env.REACT_APP_API_URL}/user/edit`, {
        method: 'PUT',
        body: JSON.stringify(this.state.userToEdit),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const editResponseParsed = await editResponse.json();
      console.log(editResponseParsed, ' parsed edit')
     this.setState({
      showEditProfile : false
     })
    } catch(err){
      console.log(err)
    }
  } 
   logoutCurrentUser = () => {
     this.setState({
       loggedUserId: undefined,
       isLogged: false
     })
     
   }
   deleteUser = async () =>{
     const deleteUserResponse = await fetch(`${process.env.REACT_APP_API_URL}/user/delete`, {
       method : 'DELETE',
       credentials: 'include'
     });
     this.setState({
      showEditProfile : false
     })
     const deleteUserParsed = await deleteUserResponse.json()
     this.logoutCurrentUser()
       }

  render() {
  return (
    <div>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <Navbar isLogged={this.state.isLogged} logIn ={this.logIn} logoutCurrentUser = {this.logoutCurrentUser} showEditProfileModal={this.showEditProfileModal}/>
      {this.state.showLogIn ? <Login register = {this.register} doUpdateCurrentUser = {this.doUpdateCurrentUser} showLogIn={this.state.showLogIn} closeLogIn={this.closeLogIn} universalClose ={this.universalClose}/> : null}
      {this.state.showRegister ? <Register doUpdateCurrentUser = {this.doUpdateCurrentUser} showRegister={this.state.showRegister} universalClose ={this.universalClose}/> : null}
      {this.state.isLogged ? <EditUser userToEdit = {this.state.userToEdit} editUserInfo={this.editUserInfo}  handleEditChange= {this.handleEditChange} deleteUser = {this.deleteUser} showEditProfile={this.state.showEditProfile} universalClose ={this.universalClose}/> : null}
      <div className="main-app" style={{'display': 'flex', 'margin' : '1em'}}>
        <MovieContainer isLogged = {this.state.isLogged} loggedUserId={this.state.loggedUserId}/>
        <RecipeContainer isLogged = {this.state.isLogged} loggedUserId={this.state.loggedUserId}/>

      </div>
        <footer class="footer">
          <p>  A night so good you might stay-in again &trade; </p>
        </footer>
    </div>
  )
  }
}

export default App