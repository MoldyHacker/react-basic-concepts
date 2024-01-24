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
                    <h1 className="Country">{this.state.name}</h1>
                </div>
                <div>
                    <span className="Gold">Gold Medals: {this.state.gold} </span>
                    <button onClick={ this.addToGold } className="Button">+</button>
                </div>
            </div>
        );
    }
}

export default Country;