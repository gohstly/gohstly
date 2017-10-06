import React from 'react';
import API from "../../utils/steamAPI";

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import {CardsMain} from '../Cards';
import {CardsTwo} from '../Cards';
import {UserGamesCards} from '../Cards';
import {FriendCards} from '../Cards';

const placeHolderInput= window.location.href.split("#");
const queryInput = placeHolderInput[1];
console.log(queryInput);

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
    skills: [],
    games: [],
    connections: []
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount() {
    this.loadResults();
    this.loadGames();
    this.loadFriends();
  }

  componentDidUpdate() {
    if(!this.state.skills){
        this.loadResults();
        this.loadGames();
        this.loadFriends();
    }
    }

    loadGames = () => {
      API.recent(queryInput)
        .then(res => {
          this.setState({games: res.data.response.games})
          console.log(this.state.games);
        })
        .catch(err => console.log(err));
    };
  
    loadResults = () => {
      API.profile(queryInput)
      .then(res => {
        this.setState({skills: res.data.response.players[0]})
        console.log(this.state.skills);
      })
      .catch(err => console.log(err));
    };

    loadFriends = () => {
      API.friends(queryInput)
      .then(res => {
        for(let i = 0; i < res.data.friendslist.friends.length; i++){
          API.profile(res.data.friendslist.friends[i].steamid)
          .then(res => {
            let joined = this.state.connections.concat(res.data.response.players);
            this.setState({connections: joined})
            console.log(this.state.connections);
          })
          .catch(err => console.log(err));
        }
      })
    };
  
    windowLocationHome = () => {
      window.location.href = "/app#" + queryInput;
    };
  
    windowLocationFriends = () => {
      window.location.href = "/friends#" + queryInput;
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
          <Tab label="OverView" />
          <Tab label="Games" />
          <Tab label="Friends" />
          <Tab label="Activities" />
        </Tabs>
      </Paper>
      
          {value === 0 && <TabContainer>{this.state.skills.avatar ? (
                <div>
          
                  <CardsMain
                    photo={this.state.skills.avatarfull}
                    name={this.state.skills.personaname}
                    country={this.state.skills.loccountrycode}
                    state={this.state.skills.locstatecode}
                  />
        
                </div>
            ) : (
              <h3>No information Available!</h3>
            )}</TabContainer>}

          {value === 1 && <TabContainer>{this.state.games.map(result => (
          
          <UserGamesCards
            name={result.name}
            hours={result.playtime_forever}
          />
        
          ))}</TabContainer>}
          {value === 2 && <TabContainer>{this.state.connections ? (
                <div>
                {this.state.connections.map(result => (
                  
                  <FriendCards
                    photo={result.avatarfull}
                    name={result.personaname}
                    country={result.loccountrycode}
                    state={result.locstatecode}
                    url = {result.profileurl}
                  />
                  ))}
                </div>
            ) : (
              <h3>No information Available!</h3>
            )}</TabContainer>}

          {value === 3 && <TabContainer>{<CardsMain/>}</TabContainer>}
      </div>
    );
  }
}

TabsMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsMain);