import React, { Component } from 'react';
import fire from './Config/Fire';
import Login from './Login';
import Home from './Home';
import Men from './Men';
import Areality from './ShoppingAr';
import PrivateRoute from './PrivateRoute';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
class App extends Component {
  constructor() {
    super();
    this.state = ({
      authenticated: false,
      user:{}
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
        this.setState({
          authenticated:true
        })
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        this.setState({
          authenticated:false
        })
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
                <PrivateRoute path="/ShoppingAr" exact component={Areality} authenticated={this.state.authenticated}/>
                {this.state.user ? ( <Home />) : (<Login />)}
            </Switch>
        </Router> 
      </div>
    )
}
}
 export default App;