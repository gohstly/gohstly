import React from 'react';
import API from "../../utils/steamAPI";

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import {CardsMain} from '../Cards';
import {CardsTwo} from '../Cards';
import {FriendCards} from '../Cards';

const placeHolderInput= window.location.href.split("#");
const queryInput = placeHolderInput[1];
console.log(queryInput);

class FriendsMain extends React.Component {
  state = { 
    skills: [],
  };


  componentDidMount() {
    this.loadResults();
  }

  componentDidUpdate() {
    if(!this.state.skills){
        this.loadResults();
        this.loadGames();
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
          {this.state.skills.avatar ? (
                <div>
          
                  <FriendCards
                    photo={this.state.skills.avatarfull}
                    name={this.state.skills.personaname}
                    country={this.state.skills.loccountrycode}
                    state={this.state.skills.locstatecode}
                  />
        
                </div>
            ) : (
              <h3>No information Available!</h3>
            )}
      </div>
    );
  }
}

TabsMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsMain);