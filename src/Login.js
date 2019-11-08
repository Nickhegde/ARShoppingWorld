import React, { Component, Fragment } from 'react';
import fire from './Config/Fire';
import FacebookLogin from './FacebookLogin';
import './Login.css';

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
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      flag: 0,
      username: null,
      borderBottom: 'sign-in',
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      this.props.history.push("/");
    })
      .catch((error) => {
        console.log(error);
        alert("Invalid Email or Password");
      });
  }
  signup(e) {
    e.preventDefault();
    if ((this.state.password == this.state.confirmPassword) && (this.state.email == this.state.confirmEmail)) {
      fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
          alert("Invalid Email or Password");
        })
    }
  }

  signUp() {
    this.setState({ flag: 1 });
    this.setState({ borderBottom: 'sign-up' });

  }
  signIn() {
    this.setState({ flag: 0 });
    this.setState({ borderBottom: 'sign-in' });

  }

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
    } else {
      alert('Facebook login error');
    }
  }

  render() {
    const { borderBottom } = this.state;
    return (
      <Fragment>
        <div className="login">
          <header className="status-bar">
            <div className="login-Signup">
              <nav id="signIn" className={`${borderBottom === 'sign-in' ? 'apply-border-bottom' : ''}`} onClick={this.signIn}>SIGN IN</nav>
              <nav id="signUp" className={`${borderBottom === 'sign-up' ? 'apply-border-bottom' : ''}`} onClick={this.signUp}>SIGN UP</nav>
            </div>
          </header>
          {this.state.flag ? (<div className="signUpContainer">
            <div className="signUpContent">
              <input id="firstNamefield" type="text" placeholder="First Name" />
              <input id="lastNamefield" type="text" placeholder="Last Name" />
              <input id="emailIdfield" value={this.state.email} onChange={this.handleChange} type="email" name="email" aria-describedby="emailHelp" placeholder="Email Address" />
              <input id="confirmEmailIdfield" value={this.state.confirmEmail} onChange={this.handleChange} type="email" name="confirmEmail" aria-describedby="emailHelp" placeholder="Confirm Email Address" />
              <input id="newPasswordfield" type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" />
              <input id="confirmNewPasswordfield" value={this.state.confirmPassword} onChange={this.handleChange} type="password" name="confirmPassword" placeholder="Confirm Password" />
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
              <FacebookLogin onLogin={this.onFacebookLogin}>
                <button id="facebookLoginBtn" >SIGN IN WITH FACEBOOK</button>
              </FacebookLogin>
              <span id="footerfield">View our Privacy Policy for more details.</span>
            </section>
          </div>)}
        </div>
      </Fragment>
    );
  }
}
export default Login;