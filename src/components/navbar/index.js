import React, { memo } from "react";
import { AppBar, IconButton, Typography, Toolbar } from "@material-ui/core";
import { connect } from "react-redux";
import { useCallback } from "react";
import { Menu as MenuIcon } from "@material-ui/icons";
import clsx from "clsx";

import { setVal } from "../../actions/todoActions";
import { useStyles } from "./style";

const NavBar = memo(props => {
  const classes = useStyles();
  const { isSidebarOpen } = props.todoReducer;

  const handleClick = useCallback(
    e => {
      switch (e.currentTarget.dataset.el_name) {
        case "btnToggleMenu":
          props.setVal(e.currentTarget.dataset.el_target, !isSidebarOpen);
          break;
        default:
          break;
      }
    },
    [props, isSidebarOpen]
  );
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isSidebarOpen
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          data-el_name="btnToggleMenu"
          data-el_target="isSidebarOpen"
          onClick={handleClick}
          edge="start"
          className={clsx(
            classes.menuButton,
            isSidebarOpen && classes.hide
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Persistent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
});

const mapDispatchToProps = dispatch => ({
  setVal: (name, value) => dispatch(setVal(name, value))
});
const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
