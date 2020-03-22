import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {BrowserRouter, Route} from 'react-router-dom';

export default class App extends React.Component{ 

  render()
  {
    return (
      <div className="App">
        <BrowserRouter>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        </BrowserRouter>
      </div>
    );
  }

}


