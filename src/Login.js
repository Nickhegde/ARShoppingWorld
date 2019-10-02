import React, { Component, Fragment } from 'react';
import fire from './Config/Fire';
import './Login.css';
import './ShoppingWorld.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    this.state = {
      email: '',
      password: '',
      flag: 0
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      console.log(error);
    });
  }
  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        console.log(error);
      })
  }

  signUp() {
    document.getElementById("signUp").style.borderBottom = "2px solid black"
    document.getElementById("signIn").style.borderBottom = "none"
  }
  signIn() {
    document.getElementById("signIn").style.borderBottom = "2px solid black";
    document.getElementById("signUp").style.borderBottom = "none";
  }
  render() {
    return (
      <Fragment>
        <div className="login">
          <header className="status-bar">
            <div className="login-Signup">
              <nav id="signIn" onClick={this.signIn}>SIGN IN</nav>
              <nav id="signUp" onClick={this.signUp}>SIGN UP</nav>
            </div>
          </header>
          {this.state.flag ? (<div className="signUpContainer">
            <div className="signUpContent">
              <input id="firstNamefield" type="text" placeholder="First Name" />
              <input id="lastNamefield" type="text" placeholder="Last Name" />
              <input id="emailIdfield" type="text" placeholder="Email Address" />
              <input id="confirmEmailIdfield" value={this.state.email} onChange={this.handleChange} type="email" name="email" aria-describedby="emailHelp" placeholder="Confirm Email Address" />
              <input id="newPasswordfield" type="password" placeholder="Password" />
              <input id="confirmNewPasswordfield" value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Confirm Password" />
              <button id="createBtn" onClick={this.signup}>CREATE</button>
              <button id="facebookLoginBtn">SIGN IN WITH FACEBOOK</button>
              <span id="footerfield">View our Privacy Policy for more details.</span>
            </div>
          </div>) : (<div className="content">
            <section className="signInCard">
              <div className="shoppingWorldicon"></div>
              <div className="shoppingworldtitle">
                <p>Shopping</p>
                <p>World</p>
              </div>
              <input id="mailIdfield" value={this.state.email} onChange={this.handleChange} type="email" name="email" aria-describedby="emailHelp" placeholder="Email Address" />
              <input id="passwordfield" value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password" />
              <button id="loginBtn" onClick={this.login}>LOGIN</button>
              <span>Forgot Password?</span>
              <button id="facebookLoginBtn">SIGN IN WITH FACEBOOK</button>
              <span id="footerfield">View our Privacy Policy for more details.</span>
            </section>
          </div>)}
        </div>
      </Fragment>
    );
  }
}
export default Login;