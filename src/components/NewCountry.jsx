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
                // const [open, setOpen] = React.useState(false);
                const { open } = this.state;
                const { onAddCountry } = this.props;
                return (
                    <React.Fragment>
                        {/* <FormDialog/> */}
                        <Fab color="primary" variant="extended" onClick={ this.handleClickOpen }>
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
                                    onAddCountry(event.target.country.value);
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

