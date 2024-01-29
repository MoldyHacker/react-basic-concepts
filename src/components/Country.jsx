import { Container, Card, CardContent, Typography, Divider, Icon, Avatar, Stack, IconButton } from "@mui/material";
import React, { Component } from "react";


class Country extends Component {
    render() {
        const { onAddMedal, onRemoveMedal, country } = this.props;
        return (
            <div>
                <Container>
                    <Card sx={{ minWidth: 275, maxWidth: 325 }} variant="outlined" className="Card">{
                        <CardContent>
                            <Stack spacing={1}>
                                <Typography variant="h5" className="Country">
                                    { country.name }
                                </Typography>
                                <Divider/>
                                <Stack 
                                    direction="row" 
                                    spacing={2} 
                                    alignItems="center" 
                                    justifyContent="space-between">
                                        <Avatar sx={{ bgcolor: "gold", color: "black" }}>{country.gold}</Avatar>
                                        <Typography>
                                            Gold Medals
                                        </Typography>
                                    <Stack direction="row" spacing={0}>
                                        <IconButton 
                                            color="primary" 
                                            onClick={ () => onAddMedal(country.id, "gold")}>
                                                <Icon>add_circle_outlined</Icon>
                                        </IconButton>
                                        <IconButton 
                                            color="error" 
                                            onClick={ () => onRemoveMedal(country.id, "gold") } 
                                            disabled={country.gold <= 0}>
                                                <Icon>remove_circle_outlined</Icon>
                                        </IconButton>
                                    </Stack>    
                                </Stack>
                                <Stack 
                                    direction="row" 
                                    spacing={2} 
                                    alignItems="center" 
                                    justifyContent="space-between">
                                        <Avatar sx={{ bgcolor: "silver", color: "black" }}>{country.silver}</Avatar>
                                        <Typography>
                                            Silver Medals
                                        </Typography>
                                    <Stack direction="row" spacing={0}>
                                        <IconButton 
                                            color="primary" 
                                            onClick={ () => onAddMedal(country.id, "silver")}>
                                                <Icon>add_circle_outlined</Icon>
                                        </IconButton>
                                        <IconButton 
                                            color="error" 
                                            onClick={ () => onRemoveMedal(country.id, "silver") } 
                                            disabled={country.silver <= 0}>
                                                <Icon>remove_circle_outlined</Icon>
                                        </IconButton>
                                    </Stack>    
                                </Stack>
                                <Stack 
                                    direction="row" 
                                    spacing={2} 
                                    alignItems="center" 
                                    justifyContent="space-between">
                                        <Avatar sx={{ bgcolor: "orange", color: "black" }}>{country.bronze}</Avatar>
                                        <Typography>
                                            Bronze Medals
                                        </Typography>
                                    <Stack direction="row" spacing={0}>
                                        <IconButton 
                                            color="primary" 
                                            onClick={ () => onAddMedal(country.id, "bronze")}>
                                                <Icon>add_circle_outlined</Icon>
                                        </IconButton>
                                        <IconButton 
                                            color="error" 
                                            onClick={ () => onRemoveMedal(country.id, "bronze") } 
                                            disabled={country.bronze <= 0}>
                                                <Icon>remove_circle_outlined</Icon>
                                        </IconButton>
                                    </Stack>    
                                </Stack>
                            </Stack>
                        </CardContent>
                    }</Card>
                </Container>
                
            </div>
        );
    }
}

export default Country;