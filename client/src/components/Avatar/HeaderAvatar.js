// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Image from './GohstlyMini.png';
import { Link } from "react-router-dom";

const styles = {
  row: {

  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

function ImageAvatars(props) {
  const classes = props.classes;
  return (
    <div className={classes.row}>
        <Link to="/" style={{ textDecoration: 'none' }}>
      <Avatar src={Image} className={classes.avatar} />
      </Link>
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

const HeaderAvatar = withStyles(styles)(ImageAvatars);
export { HeaderAvatar };

