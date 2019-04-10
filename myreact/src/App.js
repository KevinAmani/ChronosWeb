import React, { Component } from 'react';
import './App.css';
import MyMenu from './MainPage/MyMenu';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import BlogPage from './ProjectPage/BlogPage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MyMenu}/>
        <Route path='/Project' component={BlogPage}/>
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
