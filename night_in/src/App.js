
//Parent Container
import React, { Component } from 'react';
import './App.css';
import MovieContainer from './MovieContainer';
import Register from './Register';
import Login from './Login'
import Navbar from './Navbar'
import RecipeContainer from './RecipeContainer';
import EditUser from './EditUser';


//Parent Container
class App extends Component {
  
  state = {
    showLogIn : false,
    showRegister : false,
    isLogged : false,
    loggedUserId : undefined,
    userToEdit: {
      username: '',
      email: ''
    }
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
      const editResponse = await fetch(process.env.REACT_APP_API_URL + '/user/edit', {
        method: 'PUT',
        body: JSON.stringify(this.state.userToEdit),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const editResponseParsed = await editResponse.json();
      console.log(editResponseParsed, ' parsed edit')
     
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

  render() {
  return (
    <div>
      <Navbar isLogged={this.state.isLogged} logIn ={this.logIn} logoutCurrentUser = {this.logoutCurrentUser}/>
      {this.state.showLogIn ? <Login register = {this.register} doUpdateCurrentUser = {this.doUpdateCurrentUser} /> : null}
      {this.state.showRegister ? <Register doUpdateCurrentUser = {this.doUpdateCurrentUser} /> : null}
      <div className="main-app" style={{'display': 'flex', 'margin' : '1em'}}>
        <MovieContainer isLogged = {this.state.isLogged} loggedUserId={this.state.loggedUserId}/>
        <RecipeContainer isLogged = {this.state.isLogged} loggedUserId={this.state.loggedUserId}/>
        <EditUser userToEdit = {this.state.userToEdit} editUserInfo={this.editUserInfo}  handleEditChange= {this.handleEditChange}/>
      </div>
    </div>
  );
  }
}

export default App;