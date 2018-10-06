import React, { Component } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import '../App.css'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <Router>
      	<div>
      	<header>
          <Nav />
        </header>
        <div className='container'>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
