import { 
    Button, TextField, Fab, Icon, 
    Dialog, DialogActions, DialogContent, DialogTitle,
    } from '@mui/material';
import React, { Component } from 'react';

class NewCountry extends Component {
    state = {
        name: "",
        open: false,
    }
    
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open:false });
    };

            render() {
                const { open } = this.state;
                const { onAddCountry } = this.props;
                const fabStyle = {
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                };
                const checkCountry = (countryName) => {
                    if (/\s/.test(countryName)) {
                        // Handle country name with whitespace
                        // ...
                        console.log("Country name cannot contain whitespace");
                    } else {
                        // Proceed with saving the country name
                        // ...
                        console.log("Country name is valid");
                    }
                };
                const handleSave = (event) => {
                    event.preventDefault();
                    const countryName = event.target.country.value.trim();
                    if (countryName !== "") {
                        // Save the country name
                        // ...
                    } else {
                        // Handle empty country name
                        // ...
                    }
                };
                return (
                    <React.Fragment>
                        <Fab sx={fabStyle} color="primary" variant="extended" onClick={ this.handleClickOpen }>
                            <Icon sx={{ mr: 1 }}>add</Icon>
                            Add Country
                        </Fab>
                        <Dialog
                            open={open}
                            onClose={this.handleClose}
                            PaperProps={{
                                component: 'form',
                                onSubmit: (event) => {
                                    event.preventDefault();
                                    checkCountry(event.target.country.value.trim());
                                    // onAddCountry(event.target.country.value.trim());
                                    this.handleClose();
                                },
                            }}
                        >
                            <DialogTitle>Add Country</DialogTitle>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    required
                                    autoComplete='off'
                                    margin="dense"
                                    id="country"
                                    name="country"
                                    label="Country Name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose}>Cancel</Button>
                                <Button type="submit">Save</Button>
                            </DialogActions>
                        </Dialog>
                    </React.Fragment>
                );
            }
        }
        

export default NewCountry;

