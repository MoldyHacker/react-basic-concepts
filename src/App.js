import React, { Component } from 'react';
import { Grid } from "@mui/material";

import './App.css';
import Country from './components/Country';

class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          Country Medals
        </header>
        <br/>
        <Grid container justifyContent="center">
            <Country />
        </Grid>
        
      </div>
    );
  }
}

export default App;
