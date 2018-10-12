import React, { Component, Fragment } from 'react';
import fire from './Config/Fire';
import './ShoppingWorld.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    logout = () => {
        fire.auth().signOut();
        this.props.history.push("/Login");
    }
    
    render() {
        return (
            <Fragment>
                    <header className="title">
                        <div id="headerIcon"></div>
                        <div id="headerTitle">SHOPPING WORLD</div>
                        <button id="homeLogout" onClick={this.logout}>LOGOUT</button>
                    </header>
                    <section className="shoppingCategoryCards">
                        <nav className="menCard">
                        <div><Link to ="/Men" exact="true">Men</Link></div>
                        </nav>
                        <nav className="womenCard">
                            <div>Women</div>
                        </nav>
                        <nav className="kidsCard">
                            <div>Kids</div>
                        </nav>
                    </section>
            </Fragment>
        );
        }

}

export default Home;

