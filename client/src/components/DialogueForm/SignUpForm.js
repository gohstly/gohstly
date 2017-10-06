/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import API from "../../utils/monogoAPI";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

export default class FormDialog extends React.Component {
  state = {
    open: false,
    FullName: "",
    username: "",
    password: "",
    steamId: "",
    twitchName: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.FullName || !this.state.username || !this.state.password || !this.state.steamId || !this.state.twitchName) {
      alert("Fill out all fields!");
    }

    else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      )}

    else {

     API.saveUser({
        fullname: this.state.FullName,
        username: this.state.username,
        password: this.state.password,
        steamid: this.state.steamId,
        twitchname: this.state.twitchName
      })
      .then(res => {
        console.log(res);
        window.location.href = "/";
      })
        .catch(err => console.log(err));
  }
};

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} >SignUp</Button>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>{'SignUp'}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To sign up for Gohstly, please enter your email address here. We will send
              updates occationally.
            </DialogContentText>
            <TextField
            autoFocus
            required
            id="FullName"
            label="FullName"
            className="form-control"
            value={this.state.FullName}
            name="FullName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Full Name"
            margin="normal"
            fullWidth
          />
        <TextField
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
          autoComplete="current-password"
          margin="normal"
          fullWidth
        />
        <TextField
          required
          id="steamId"
          label="steamId"
          className="form-control"
          value={this.state.steamId}
          name="steamId"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Steam ID"
          margin="normal"
          fullWidth
        />
        <TextField
          required
          id="twitchName"
          label="twitchName"
          className="form-control"
          value={this.state.twitchName}
          name="twitchName"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Twitch Name"
          
          margin="normal"
          fullWidth
        />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button className="btn btn-primary btn-md" onClick={this.handleFormSubmit} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}