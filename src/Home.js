import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Men from './Men';
import { fire } from './Config/Fire';
import './ShoppingWorld.css';
import { Link } from 'react-router-dom';

class Home extends Component {

    logout = () => {
        fire.auth().signOut();
    }

    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path="/Men" exact component={Men} />
                    <Route>
                        <Fragment>
                            <header className="title">
                                <div id="headerIcon"></div>
                                <div id="headerTitle">SHOPPING WORLD</div>
                                <button id="homeLogout" onClick={this.logout}>LOGOUT</button>
                            </header>
                            <section className="shoppingCategoryCards">
                                <nav className="menCard">
                                    <div><Link to="/Men" exact="true">Men</Link></div>
                                </nav>
                                <nav className="womenCard">
                                    <div>Women</div>
                                </nav>
                                <nav className="kidsCard">
                                    <div>Kids</div>
                                </nav>
                            </section>
                        </Fragment>
                    </Route>
                </Switch>
            </Fragment>
        );
    }

}

export default Home;

