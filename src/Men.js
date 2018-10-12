import React, { Component, Fragment } from 'react';
import './ShoppingWorld.css';
import { Link } from 'react-router-dom';
import tshirt1 from './Images/tshirt1.PNG';
import tshirt2 from './Images/tshirt2.PNG';
import tshirt3 from './Images/tshirt3.PNG';
import tshirt4 from './Images/tshirt1.PNG';
import Iframe from 'react-iframe';
class Men extends Component {
    constructor() {
      super();
    }
    // arPage = () => {
    //     // console.log("arpage");
        // console.log(document.getElementById("arContainer"));
        // console.log(document.getElementById("heading"));
        // document.getElementById("heading").style.display = "none";
    //     // document.getElementById("images").style.display = "none";
    //     document.getElementById("heading").classList.toggle("itemNoDisplay");
    //     document.getElementById("arContainer").style.display = "block";
    //    document.getElementById("images").classList.toggle("itemNoDisplay");
    //    function createMarkup() {
    //      var html = require('./ShoppingAr.html');
    //     return {__html: html};
    //   }
    //   document.getElementById("heading").classList.toggle("itemNoDisplay");
    //   document.getElementById("images").classList.toggle("itemNoDisplay");
    //     return <div dangerouslySetInnerHTML={createMarkup()} />;
    // }
    // }

    render() {
      return (
       <Fragment>
      <header id="heading" className="mensPage">
        <div id="mensPageTitle">MEN'S SHOPPING WORLD</div>
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
             <a href ="/ShoppingAr.html">
            <img id="tshirt2"  src={tshirt2}/>
             </a> 
            <p>Tshirt</p>
            <p>Price-Rs.600</p>
            <p>Click to see more</p>
        </div>
        <div>
             <Link to ="/ShoppingAr" exact> 
            <img id="tshirt3" src={tshirt3}/>
             </Link>
            <p>Tshirt</p>
            <p>Price-Rs.600</p>
            <p>Click to see more</p>
        </div>
        <div>
            {/* <Link to ="/ShoppingAr.html" exact exact> */}
            <img id="tshirt4"  src={tshirt4}/>
            {/* </Link> */}
            <p>Tshirt</p>
            <p>Price-Rs.600</p>
            <p>Click to see more</p>
        </div>
    </section>

    {/* AR code */}
    {/* <Iframe id="arContainer" url="ShoppingAr.html">
    </Iframe> */}
    {/* <script src="Shoppingworld4.js"></script> */}
       </Fragment>
      )
  }
  }
   export default Men;