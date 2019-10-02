import React, { Component, Fragment } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Link } from 'react-router-dom';
import fire from './Config/Fire';
import Men from './Men';
import './ShoppingWorld.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.gotoMenSite = this.gotoMenSite.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    gotoMenSite() {

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
                        <Router>
                            <Link to="/Men">Men</Link>
                            <div>
                                <Route path="/Men" component={Men} />
                            </div>
                        </Router>
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

