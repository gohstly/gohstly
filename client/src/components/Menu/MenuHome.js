import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

const MenuHome = () => (
  <div>
    <Paper style={style.paper}>
      <Menu>
        <MenuItem primaryText="Feed" leftIcon={<RemoveRedEye />} />
        <MenuItem primaryText="Games" leftIcon={<PersonAdd />} />
        <MenuItem primaryText="Users" leftIcon={<ContentLink />} />
        <Divider />
        <MenuItem primaryText="Streams" leftIcon={<ContentCopy />} />
        <MenuItem primaryText="Videos" leftIcon={<Download />} />
        <Divider />
        <MenuItem primaryText="Chat" leftIcon={<Delete />} />
      </Menu>
    </Paper>
  </div>
);

export default MenuHome;