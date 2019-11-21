
//Parent Container
import React from 'react';
import './App.css';
import MovieContainer from './MovieContainer';
import Register from './Register';
import Login from './Login'
import Navbar from './Navbar'


//Parent Container
function App() {
  return (
    <div>
      <Login /> 
      <Register />
      <MovieContainer />
      <Navbar />
    </div>
  );
}

export default App;