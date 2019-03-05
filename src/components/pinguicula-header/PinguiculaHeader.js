import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/es/Divider/Divider";
import {Link} from "react-router-dom";
import {NAVIGATIONS_MENU} from "./PinguiculaMenu";
import "./PinguiculaHeader.scss";

export default class PinguiculaHeader extends React.Component {

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

    const sideList = (
      <div className="side-menu-container">
        <h3>Menu</h3>
        <Divider />
        <List>
          {NAVIGATIONS_MENU.map((navigation) => (
            <ListItem button key={navigation.label} component={Link} to={navigation.link}>
              <ListItemIcon>{navigation.icon}</ListItemIcon>
              <ListItemText primary={navigation.label} />
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
