import React, { Component, Fragment } from 'react';
import { fire, auth } from './Config/Fire';
import FacebookLogin from './FacebookLogin';
import error1 from './Images/error1.svg';
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
    this.setState({ showErrorMsg: false })
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    })
      .catch((error) => {
        console.log(error);
        this.setState({ showErrorMsg: true, email: '', password: '' });
      });
  }
  signup(e) {
    e.preventDefault();
    auth().createUserWithEmailAndPassword(this.state.email, this.state.newPassword)
      .catch((error) => {
        this.setState({ showErrorMsg: true, email: '', confirmEmail: '', newPassword: '', confirmPassword: '' });
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
    this.setState({ showErrorMsg: false, flag: 1, borderBottom: 'sign-up', email: '', });
  }
  signIn() {
    this.setState({ showErrorMsg: false, flag: 0, borderBottom: 'sign-in', email: '', });
  }

  togglePasswordDisplay = () => {
    this.setState({ togglePasswordDisplay: !this.state.togglePasswordDisplay })
  }

  removeErrorMsg = () => {
    this.setState({ showErrorMsg: false });
  }

  render() {
    const { borderBottom, togglePasswordDisplay, email, password, confirmEmail, newPassword, confirmPassword, showErrorMsg } = this.state;
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
              {showErrorMsg ?
                <div className="error-msg-container" onClick={this.removeErrorMsg}>
                  <img className="error-icon" src={error1} />
                  <span className="error-msg"> Error, please try again</span>
                </div> : null
              }
              <input id="firstNamefield" type="text" placeholder="First Name" onChange={this.removeErrorMsg} />
              <input id="lastNamefield" type="text" placeholder="Last Name" onChange={this.removeErrorMsg} />
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
              {showErrorMsg ?
                <div className="error-msg-container" onClick={this.removeErrorMsg}>
                  <img className="error-icon" src={error1} />
                  <span className="error-msg"> Incorrect email or password</span>
                </div> : null
              }
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