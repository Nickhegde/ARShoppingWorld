import React, { Component, Fragment } from 'react';
import './ShoppingWorld.css';
import fire from './Config/Fire';
// import './Shopping';

class Men extends Component {
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
       <Fragment>
      <header id="heading" class="mensPage">
        <div id="mensPageTitle">MEN'S SHOPPING WORLD</div>
    </header>
    <section class="imageContainer" id="images">
        <div>
            <img id="tshirt1" src="Images/tshirt1.PNG"/>
            <p>Tshirt</p>
            <p>Price-Rs.600</p>
            <p>Click to see more</p>
        </div>
        <div>
            <img id="tshirt2" src="Images/tshirt2.PNG"/>
            <p>Tshirt</p>
            <p>Price-Rs.600</p>
            <p>Click to see more</p>
        </div>
        <div>
            <img id="tshirt3" src="Images/tshirt3.PNG"/>
            <p>Tshirt</p>
            <p>Price-Rs.600</p>
            <p>Click to see more</p>
        </div>
        <div>
            <img id="tshirt4" src="Images/tshirt1.PNG"/>
            <p>Tshirt</p>
            <p>Price-Rs.600</p>
            <p>Click to see more</p>
        </div>
    </section>

    {/* AR code */}
    <iframe id="arContainer">
    </iframe>
    {/* <script src="Shoppingworld4.js"></script> */}
       </Fragment>
      )
  }
  }
   export default Men;