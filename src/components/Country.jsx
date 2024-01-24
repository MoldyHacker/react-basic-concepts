import { Component } from "react";

class Country extends Component {
    state = {
        name: 'United States of America',
        gold: 0,
    }
    addToGold = () => {
        this.setState({ gold: this.state.gold + 1 })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.name}</h1>
                </div>
                <div>
                    <span>Gold: {this.state.gold} </span>
                    <button onClick={ this.addToGold }>+</button>
                </div>
            </div>
        );
    }
}

export default Country;