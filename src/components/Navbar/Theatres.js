import React from 'react';
import ReactDOM from 'react-dom';
import './Theatres.css';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
// import chennai from '../../Chennai.js'


 
class Theatres extends React.Component {
    render() {
        return(
            <div>
            <div  className="h1">
                <p className="p" >CHOOSE YOUR</p>
                <h1>THEATRE</h1>
            </div>
           <div className="row">
           <p className="png"><img src={"./images/chennai1.png"} /> CHENNAI</p>
           <p className="png"><img src={"./images/bangalore1.jpg"} />BANGALORE</p>
           <p className="png"><img src={"./images/mumbai2.png"} />MUMBAI</p>
           <p className="png"><img src={"./images/kolkata1.png"} />KOLKATA</p>
           <p className="png"><img src={"./images/delhi.png"} />NEWDELHI</p>
           <p className="png"><img src={"./images/hyderabad.png"} />HYDRABAD</p>
           <p className="png"><img src={"./images/kerala1.png"} />KOCHI</p>
           <p className="png"><img src={"./images/jaipur.JPG"} />JAIPUR</p>
           </div>
            </div>
           
        )
    }
}

export default Theatres;