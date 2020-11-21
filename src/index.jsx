import React, {useState} from 'react';
import { render } from 'react-dom';
import './index.html';
import './joke/style.css';
import {jokes} from './jokes.jsx';
import { Joke } from './joke/joke.jsx';


 const App=()=> {
  
  return (
    jokes.map(prop => (
    <Joke 
    user_id={prop.id} 
    user_name={prop.name} 
    likes={prop.likes} 
    text={prop.text} 
    dislikes={prop.dislikes}/>)
    ));
};

render(<App/>, document.querySelector('#app'));