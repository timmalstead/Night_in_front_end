
//Parent Container
import React from 'react';
import './App.css';
import MovieContainer from './MovieContainer';
import Register from './Register';
import Login from './Login'
import Navbar from './Navbar'
import RecipeContainer from './RecipeContainer'


//Parent Container
function App() {
  return (
    <div>
      <Navbar />
      <Login /> 
      <Register />
      <MovieContainer />
      <RecipeContainer />
    </div>
  );
}

export default App;