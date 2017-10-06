/* eslint-disable flowtype/require-valid-file-annotation */
import React from 'react';
import API from "../../utils/monogoAPI";
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
    username: "",
    password: ""
  };

  handleInputChange = event => {
    
        let value = event.target.value;
        const name = event.target.name;
    
        if (name === "password") {
          value = value.substring(0, 15);
        }
    
        this.setState({
          [name]: value
        });
      };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleFormSubmit = event => {
    
        event.preventDefault();
    
        API.signIn(this.state.username)
          .then(res => {
            console.log(res.data)
            if(this.state.username===res.data[0].username && this.state.password===res.data[0].password)
              {
                window.location.href = "/app#" + res.data[0].steamid
              }
            else if (this.state.username!==res.data[0].username || this.state.password!==res.data[0].password)
              {
                alert("Your email or password is invalid")
              }
            })
    
        if (!this.state.username || !this.state.password) {
          alert("Please fill out all fields");
        } else if (this.state.password.length < 6) {
          alert(
            `Choose a more secure password`
          );
        } else {
    
          this.setState({
            username: this.state.username,
            password: this.state.password
          });
        }
    
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
          id="username"
          label="username"
          className="form-control"
          value={this.state.username}
          name="username"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Username"
          margin="normal"
          fullWidth
        />
        <TextField
        required
          id="password"
          label="password"
          className="form-control"
          value={this.state.password}
          name="password"
          onChange={this.handleInputChange}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          margin="normal"
          fullWidth
        />
        
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleFormSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}