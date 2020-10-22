import React from 'react';

class State1 extends React.Component {
    constructor() {
        super();

        this.state = {
            samplevalue:"Welcome VeeraVignesh"
        }
    }

    change = () => 
    {
        this.setState({samplevalue:"Thanks for Watching"});
    }
    render() {
        return(
            <div>
              <h1>{this.state.samplevalue} {this.state.name}</h1>
              <br />
              <button type='button' onClick={this.change}>EXIT</button>
            </div>
        )
    }
}

export default State1;