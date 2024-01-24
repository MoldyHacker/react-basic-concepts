import { Container, Card, CardContent, Typography, Divider, Button, Icon, Avatar, Stack } from "@mui/material";
import React, { Component } from "react";


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
                <Container>
                    <Card sx={{ minWidth: 275, maxWidth: 325 }} variant="outlined" className="Card">{
                        <CardContent>
                            <Stack spacing={1}>
                                <Typography variant="h5" className="Country">
                                    {this.state.name}
                                </Typography>
                                <Divider/>
                                <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                                    <Avatar sx={{ bgcolor: "gold", color: "black" }}>{this.state.gold}</Avatar>
                                    <Typography>
                                        Gold Medals
                                    </Typography>
                                </Stack>
                                <Button variant="contained" onClick={ this.addToGold }>
                                    Add Medal
                                    <Icon>add</Icon> 
                                </Button>
                            </Stack>
                        </CardContent>
                    }</Card>
                </Container>
                
            </div>
        );
    }
}

export default Country;