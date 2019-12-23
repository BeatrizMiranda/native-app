import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Contact from './Components/Contact'
import Navbar from './Components/NavBar'
import About from './Components/About'
import Post from './Components/Post'
import Home from './Components/Home'

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
