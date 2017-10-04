import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import DrawerMenu from '../Drawer';

function handleTouchTap() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const AppBarHome = () => (
  <AppBar
  iconElementLeft={<DrawerMenu></DrawerMenu>}
    title={<span style={styles.title}>Gohstly</span>}
    onTitleTouchTap={handleTouchTap}
    
    iconElementRight={<FlatButton label="Save" />}
  />
);

export default AppBarHome;