import React, { Component } from 'react';
import { Grid } from "@mui/material";

import './App.css';
import Country from './components/Country';

class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', gold: 2 },
      { id: 2, name: 'China', gold: 3 },
      { id: 3, name: 'Germany', gold: 0 },
    ]
  }
  handleAddMedal = (countryId) => {
    const country = this.state.countries.find(country => country.id === countryId)
    country.gold++
    
    this.setState({ countries: this.state.countries.map(c => c.id === country.id ? country : c)})
  }
  handleRemoveMedal = (countryId) => {
    const country = this.state.countries.find(country => country.id === countryId)
    country.gold > 0 ? country.gold-- : country.gold = 0
    this.setState({ countries: this.state.countries.map(c => c.id === country.id ? country : c)})
  }
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          Country Medals
        </header>
        <br/>
        <Grid container justifyContent="center">
          { this.state.countries.map(country => 
            <Country 
              key={country.id} 
              country={country} 
              onAddMedal={this.handleAddMedal}
              onRemoveMedal={this.handleRemoveMedal}
            />)
          }
            {/* <Country /> */}
        </Grid>
        
      </div>
    );
  }
}

export default App;
