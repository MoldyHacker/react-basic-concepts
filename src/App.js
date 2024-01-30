import React, { Component } from 'react';
import { Grid, Avatar, Stack } from "@mui/material";

import './App.css';
import Country from './components/Country';

class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', gold: 2, silver: 3, bronze: 4},
      { id: 2, name: 'China', gold: 3, silver: 2, bronze: 1},
      { id: 3, name: 'Germany', gold: 0, silver: 1, bronze: 0},
    ]
  }
  handleAddMedal = (countryId, medal) => {
    const country = this.state.countries.find(country => country.id === countryId)
    country[medal]++
    
    this.setState({ countries: this.state.countries.map(c => c.id === country.id ? country : c)})
  }
  handleRemoveMedal = (countryId, medal) => {
    const country = this.state.countries.find(country => country.id === countryId)
    country.gold > 0 ? country[medal]-- : country[medal] = 0
    
    this.setState({ countries: this.state.countries.map(c => c.id === country.id ? country : c)})
  }
  get totalMedals() {
    let total = 0
    this.state.countries.forEach(country => {
      total += country.gold + country.silver + country.bronze
    })
    return total
  }

  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
            <div className='header-text'>
              Medal Tracker
            </div>
            <Avatar sx={{ bgcolor: "gold", color: "black" }}>{this.totalMedals}</Avatar>
          </Stack>
          
          
          
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
        </Grid>
        
      </div>
    );
  }
}

export default App;
