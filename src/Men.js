import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './ShoppingWorld.css';
import { Link } from 'react-router-dom';
import tshirt1 from './Images/tshirt1.PNG';
import tshirt2 from './Images/tshirt2.PNG';
import tshirt3 from './Images/tshirt3.PNG';
import tshirt4 from './Images/tshirt1.PNG';

class Men extends Component {
    constructor() {
      super();
    }
    render() {
      return (
       <Fragment>
        <header id="heading" className="mensPage">
            <div id="mensPageTitle">MEN'S SHOPPING WORLD</div>
            <Link to ="/Home" exact="true"> 
            <button id="redirectHome">HOME</button>
            </Link>
        </header>
        <section className="imageContainer" id="images">
            <div>
                <Link to ="/ShoppingAr" exact="true"> 
                    <img id="tshirt1" src={tshirt1}/>
                </Link>
                <p>Tshirt</p>
                <p>Price-Rs.600</p>
                <p>Click to see more</p>
            </div>
            <div>
                <Link to ="/ShoppingAr" exact="true"> 
                    <img id="tshirt2"  src={tshirt2} />
                </Link> 
                <p>Tshirt</p>
                <p>Price-Rs.600</p>
                <p>Click to see more</p>
            </div>
            <div>
                <Link to ="/ShoppingAr" exact="true"> 
                    <img id="tshirt3" src={tshirt3}/>
                </Link>
                <p>Tshirt</p>
                <p>Price-Rs.600</p>
                <p>Click to see more</p>
            </div>
            <div>
                <Link to ="/ShoppingAr.html" exact exact>
                    <img id="tshirt4"  src={tshirt4}/>
                </Link>
                <p>Tshirt</p>
                <p>Price-Rs.600</p>
                <p>Click to see more</p>
            </div>
        </section>
       </Fragment>
      )
  }
  }
   export default Men;