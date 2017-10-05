/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

export default class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} >Login</Button>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>{'Login'}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To login for Gohstly, please enter your information here. 
            </DialogContentText>
        <TextField
        autoFocus
          required
          id="required"
          label="UserName"
          
          margin="normal"
          fullWidth
        />
        <TextField
        required
          id="password"
          label="Password"
          
          type="password"
          autoComplete="current-password"
          margin="normal"
          fullWidth
        />
        
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}