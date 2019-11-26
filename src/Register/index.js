import React, { Component } from 'react'

import {Modal, Form, Button, Label, Header} from 'semantic-ui-react'

class Register extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    CurrentUserId: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const registerResponse = await fetch(`${process.env.REACT_APP_API_URL}/user/register`,{
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
      this.props.universalClose()
    }
  }

  render(){
    return(
      <Modal open={this.props.showRegister}>
        <Modal.Content>
        <Header>Register</Header>
        <Form onSubmit={this.handleSubmit}>
          <Label> Username</Label>
          <Form.Input type='text' name="username" onChange={this.handleChange} />
          <Label> Password</Label>
          <Form.Input type='password' name="password" onChange={this.handleChange} />
          <Label> Email</Label>
          <Form.Input type='text' name="email" onChange={this.handleChange} />
          <Button type="Submit"  >Register</Button>
          <Button type="button" onClick={this.props.universalClose}>Close</Button>
        </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default Register