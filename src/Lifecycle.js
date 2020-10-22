import React from 'react';

class Lifecycle extends React.Component {
    constructor() {
        super();
        this.state = {
            initialvalue:"welcome VeeraVignesh"
        }
    }

    componentWillMount() {
        alert("Do you want to Learn React JS")
    }

    render() {
        return(
            <div>
              <h1>{this.state.initialvalue}</h1>
              <br />
              <button type="button" onClick={this.change}>Change Value</button>
            </div>
        )
    }

    change = () => {
        this.setState({
            initialvalue: "What to Learn React JS"
        })
    }

    componentDidMount() {
        setTimeout(() =>{
            this.setState({
                initialvalue: "Thank You for Joinus"
            })},3000)
    }

    componentWillUpdate() {
        alert("Do you want to change the New value")
    }

    componentDidUpdate() {
        document.getElementById("mydiv").innerHTML="New Value are UPDATED SUCCESSFULLY"+this.state.initialvalue;
    } 
}

export default Lifecycle;