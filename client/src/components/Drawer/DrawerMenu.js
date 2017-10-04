import React from "react";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MenuHome from '../Menu';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';


export default class DrawerMenu extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {open: false};
    }
  
    handleToggle = () => this.setState({open: !this.state.open});
  
    handleClose = () => this.setState({open: false});
  
    render() {
      return (
        <div>
          <IconButton
            label="Open Drawer"
            onClick={this.handleToggle}
          />
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuHome>Menu Item</MenuHome>
          </Drawer>
        </div>
      );
    }
  }