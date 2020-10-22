import React from 'react'
import Props2 from './Props2.js';

class Props1 extends React.Component {
    render(){
        return(
            <div>
                <h2>My Skills are: {this.props.skills}</h2>
                <Props2 location="Chennai,Bangalore,Mumbai"/>
            </div>
        )
    }
}

export default Props1;