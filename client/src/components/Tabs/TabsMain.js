import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import {CardsMain} from '../Cards';
import {CardsTwo} from '../Cards';
import {GridsList} from '../GridSingleList';
import {ConnectGrids} from '../GridSingleList';
import {ShareGrid} from '../GridSingleList';

function TabContainer(props) {
  return <div style={{ padding: 20 }}>{props.children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
  },
});

class TabsMain extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Play" />
          <Tab label="Connect" />
          <Tab label="Share" />
        </Tabs>
      </Paper>
          {value === 0 && <TabContainer>{<GridsList/>}</TabContainer>}
          {value === 1 && <TabContainer>{<ConnectGrids/>}</TabContainer>}
          {value === 2 && <TabContainer>{<ShareGrid/>}</TabContainer>}
      </div>
    );
  }
}

TabsMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsMain);