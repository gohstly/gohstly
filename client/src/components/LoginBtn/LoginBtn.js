import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { Link } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    background: 'black',
  },
});



function FlatButtons(props) {
  const classes = props.classes;
  return (
    <div>
      <Button href="#flat-buttons" className={classes.button}>
        <Link to="/">Login</Link>
      </Button>


    </div>
  );
}

FlatButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FlatButtons);
