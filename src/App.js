import React, { Component } from 'react';
import fire from './Config/Fire';
import Login from './Login';
import Home from './Home';
import Men from './Men';
import Areality from './ShoppingAr'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: {}
      });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
      <div>       
        <Router>
            <Switch>
                <Route path="/Login" exact component={Login} /> 
                <Route path="/Men" exact component={Men} />
                <Route path="/ShoppingAr" exact component={Areality} />
                {this.state.user ? ( <Home />) : (<Login />)}
            </Switch>
        </Router> 
      </div>
    )
}
}
 export default App;