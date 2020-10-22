import React from 'react';
import ReactDOM from 'react-dom';
import './Movies.css';
import Card from './Card.js';


class Movies extends React.Component {
    state = {
    data: []
    }

    getData = async ()=>{
           const res = await fetch('data.json'); 
           const data = await res.json();
           this.setState({data: data});
    }

    componentDidMount(){
        this.getData();
    }

    render(){
     const {data} = this.state;
        return(
                <div className="wrapper">
                    <div className="app">
                       <Card data={data}/>
                    </div>
                        
                        <div className="row">
                        <div className="previous">
                            <img src ="images/previous.png" alt="" />
                        </div>
                        <div className="next">
                            <img src ="images/next.png" alt="" />
                        </div>
                    </div>
                    </div>
        );
    };
}


export default Movies;