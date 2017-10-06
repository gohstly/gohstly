// @flow weak
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Image from './gamecontroller.jpeg';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

function SimpleMediaCard(props) {
  const classes = props.classes;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.photo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h3">
            
            Name: {props.name}
          </Typography>
          <Typography component="p">
          Location: {props.country}, {props.state}
          </Typography>
          <Typography component="p">
            Profile Url: {props.url}
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Share
          </Button>
          <Button dense color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const FriendCards = withStyles(styles)(SimpleMediaCard);
export { FriendCards };