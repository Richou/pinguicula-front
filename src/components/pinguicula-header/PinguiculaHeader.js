import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import "./PinguiculaHeader.scss";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactMail from '@material-ui/icons/ContactMail';
import Contacts from '@material-ui/icons/Contacts';
import {withStyles} from '@material-ui/core/styles';
import Divider from "@material-ui/core/es/Divider/Divider";

const styles = {
  list: {
    width: 250,
  },
};

class PinguiculaHeader extends React.Component {

  state = {
    auth: true,
    anchorEl: null,
    drawerOpen: false,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  onLogoutClickHandler = () => {
    if (this.props.logoutHandler) {
      this.props.logoutHandler();
    }
    this.handleClose();
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  toggleDrawer = (open) => () => {
    this.setState({
      drawerOpen: open,
    });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <h3>Menu</h3>
        <Divider />
        <List>
          {['Users', 'Contacts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Contacts /> : <ContactMail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <AppBar position="static" className="pinguicula-header-container">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className="pinguicula-header-title">
            Pinguicula
          </Typography>
          <div>
            <IconButton
              aria-owns={open ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.onLogoutClickHandler}>Logout</MenuItem>
            </Menu>
          </div>
          <SwipeableDrawer
            open={this.state.drawerOpen}
            onClose={this.toggleDrawer(false)}
            onOpen={this.toggleDrawer(true)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer(false)}
              onKeyDown={this.toggleDrawer(false)}>
              {sideList}
            </div>
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>
    )
  }

}

export default withStyles(styles)(PinguiculaHeader)
