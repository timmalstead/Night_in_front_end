import React, {  Component } from 'react'
import {Modal, Form, Button, Label, Header} from 'semantic-ui-react'

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
    
    if(parsedResponse.status.message === "Success"){
      console.log('we did it')
      this.props.doUpdateCurrentUser(parsedResponse.data)
      this.props.closeLogIn()
    }
  }

  render(){
    return(
      <Modal open={this.props.showLogIn}>
        <Modal.Content>
          <Header>Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <Label> Username</Label>
          <Form.Input type='text' name="username" onChange={this.handleChange} />
          <Label> Password</Label>
          <Form.Input type='password' name="password" onChange={this.handleChange} />
          <Label> Email</Label>
          <Form.Input type='text' name="email" onChange={this.handleChange} />
          <Button type="Submit" color="green">Login</Button>
          <Button type="button" onClick={() => this.props.register()}>Register</Button>
          <Button type="button" onClick={this.props.universalClose}>Close</Button>
        </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default Login