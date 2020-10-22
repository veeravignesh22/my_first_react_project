import React from 'react';
import State3 from './State3.js'

class State2 extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return(
            <div>
                <h4>Button Click : {this.state.count}</h4>
                <button type="button" onClick={this.handleClick}>ADD</button>
                <State3 />
            </div>
        )
    }
}

export default State2;