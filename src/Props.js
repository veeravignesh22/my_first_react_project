import React, { Component } from 'react';
import Props1 from './Props1.js';

// function Props(Props){
//     return(
//         <div>
//             <h1>Hi {Props.name} welocome to {Props.learn}</h1>
//         </div>
//     )
// }

class Props extends React.Component {
    render(){
        return(
            <div>
                <h1>Hi {this.props.name} welcome to {this.props.learn} </h1>
        <h2>Your EmpID: {this.props.id}</h2>
        <Props1 skills="REACT JS , JAVA, SQL"/>
            </div>
        )
    }
}



export default Props;