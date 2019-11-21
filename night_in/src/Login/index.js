import React, { Component } from 'react'


class Login extends Component {
  state = {
    username: '',
    password: '',
    email: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  //flask json to js json
  handleSubmit = async (e) => {
    e.preventDefault()
    const registerResponse = await fetch(`${process.env.REACT_APP_API_URL}/user/login`,{
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type' : 'application/json'
       
      }
      
    })

    const parsedResponse = await registerResponse.json();

    console.log(parsedResponse)

    if(parsedResponse.status.code === "Success"){
      console.log('we did it')
      this.props.doUpdateCurrentUser(parsedResponse.data)
      this.props.history.push('/')
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <small> Username</small>
        <input type='text' name="username" onChange={this.handleChange} />
        <small> Password</small>
        <input type='password' name="password" onChange={this.handleChange} />
        <small> Email</small>
        <input type='text' name="email" onChange={this.handleChange} />
        <button type="Submit" color="green">Login</button>
      </form>
    )
  }
}

export default Login