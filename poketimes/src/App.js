import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
