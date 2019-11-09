import React, { Component, Fragment } from 'react';
import { fire, auth } from './Config/Fire';
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
      newPassword: '',
      confirmPassword: '',
      flag: 0,
      username: null,
      borderBottom: 'sign-in',
      togglePasswordDisplay: false,
      showErrorMsg: false
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      // this.props.history.push("/");
    })
      .catch((error) => {
        console.log(error);
        alert("Invalid Email or Password");
      });
  }
  signup(e) {
    e.preventDefault();
    auth().createUserWithEmailAndPassword(this.state.email, this.state.newPassword)
      .catch((error) => {
        alert("Invalid Email or Password");
      })
    this.setState({});
    this.setState({
      email: '',
      confirmEmail: '',
      password: '',
      newPassword: '',
      confirmPassword: '',
    })
  }

  signUp() {
    this.setState({ flag: 1, borderBottom: 'sign-up', email: '', });
  }
  signIn() {
    this.setState({ flag: 0, borderBottom: 'sign-in', email: '', });
  }

  togglePasswordDisplay = () => {
    this.setState({ togglePasswordDisplay: !this.state.togglePasswordDisplay })
  }

  render() {
    const { borderBottom, togglePasswordDisplay, email, password, confirmEmail, newPassword, confirmPassword } = this.state;
    const createBtnStatus = email && (email === confirmEmail) && newPassword && (newPassword === confirmPassword)
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
              <input id="emailIdfield" value={email} onChange={this.handleChange} type="email" name="email" aria-describedby="emailHelp" placeholder="Email Address" />
              <input id="confirmEmailIdfield" value={confirmEmail} onChange={this.handleChange} type="email" name="confirmEmail" aria-describedby="emailHelp" placeholder="Confirm Email Address" />
              <input id="newPasswordfield" type="password" value={newPassword} onChange={this.handleChange} name="newPassword" placeholder="Password" />
              <input id="confirmNewPasswordfield" value={confirmPassword} onChange={this.handleChange} type="password" name="confirmPassword" placeholder="Confirm Password" />
              <button id="createBtn" className={createBtnStatus ? "" : "createInacitve"} onClick={createBtnStatus ? this.signup : () => { }} disabled={!createBtnStatus}>CREATE</button>
              <button id="facebookLoginBtn">SIGN IN WITH FACEBOOK</button>
            </div>
          </div>) : (<div className="content">
            <section className="signInCard">
              <div className="shoppingWorldicon"></div>
              <div className="shoppingworldtitle">
                <p>Shopping</p>
                <p>World</p>
              </div>
              <input id="mailIdfield" value={email} onChange={this.handleChange} type="email" name="email" aria-describedby="emailHelp" placeholder="Email Address" />
              <div className="password-section">
                <input id="passwordfield" value={password} onChange={this.handleChange} type={togglePasswordDisplay ? "text" : "password"} name="password" placeholder="Password" />
                <span id="showpasswordbtn" className="show-password" onClick={this.togglePasswordDisplay}>{togglePasswordDisplay ? "HIDE" : "SHOW"}</span>
              </div>
              <button id="loginBtn" onClick={this.login}>LOGIN</button>
              <span className='forgot-password-btn'>Forgot Password?</span>
              <FacebookLogin>
                <button id="facebookLoginBtn" >SIGN IN WITH FACEBOOK</button>
              </FacebookLogin>
            </section>
          </div>)}
        </div>
      </Fragment>
    );
  }
}
export default Login;