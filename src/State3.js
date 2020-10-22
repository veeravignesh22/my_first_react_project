import React from 'react';

class State3 extends React.Component {
    constructor() {
        super();
        this.state = {
            count:""
        };
    }

    handleClick = () => {
        this.setState({
            count:"Thank you"
        })
    }

    render() {
        return(
            <div>
                <h4> {this.state.count}</h4>
                <button type="button" onClick={this.handleClick}>ClickMe Please</button>
            </div>
        )
    }
}

export default State3;