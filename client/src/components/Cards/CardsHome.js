// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Image from './GohstlyMiddle.png';

const styles = {
  card: {
    width: '100%'
  },
  media: {
    flexGrow: 1,
    height: 350,
    overflow: 'hidden',
  },
};

function SimpleMediaCard(props) {
  const classes = props.classes;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={Image}
          title="Contemplative Reptile"
        />
        
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const CardsHome = withStyles(styles)(SimpleMediaCard);
export { CardsHome }