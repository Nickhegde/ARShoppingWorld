import React, { Component } from 'react';
import fire from './Config/Fire';
import Login from './Login';
import Home from './Home';

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
     {this.state.user ? ( <Home/>) : (<Login />)}
     </div>
    )
}
}
 export default App;