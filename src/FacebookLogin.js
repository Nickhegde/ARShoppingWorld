import React, { Component } from 'react';
import { ref, auth, provider } from './Config/Fire';

export default class FacebookLogin extends Component {
  state = {
    user: null
  }

  login = () => {
    auth().signInWithPopup(provider)
      .then(({ user }) => {
        this.setState({ user })
      })
  }
  logout = () => {
    auth().signOut().then(() => {
      this.setState({ user: null })
    })
  }

  render() {
    const { user } = this.state;
    let { children } = this.props;
    return (
      <div onClick={this.login}>
        {children}
      </div>
    );
  }
}