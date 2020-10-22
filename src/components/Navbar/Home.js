import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import Movies from './Movies.js';
import Theatres from './Theatres.js';
import Events from './Events.js';
import './Home.css';


function Home() {
    return(
        <div>
            <nav>

                <Router>
                    
                    <div className="Home">
                        <Link to="/">MOVIE Times <i className='fab fa-typo3'></i></Link>

                    <ul className="Home">
                        
                        <li>
                            <Link to="/Movies">Movies</Link>
                        </li>
                        <li>
                            <Link to="/Theatres">Theatres</Link>
                        </li>
                        <li>
                            <Link to="/Events">Events</Link>
                        </li>
                    </ul>
                    </div>
                    <switch>
                    <Route exact path="/" component={Movies}></Route>
                    <Route path="/Movies" component={Movies}></Route>
                    <Route path="/Theatres" component={Theatres}></Route>
                    <Route path="/Events" component={Events}></Route>
                    </switch>
                </Router>
            </nav>
            </div>

            
    );
}

export default Home;