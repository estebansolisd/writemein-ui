import React, { memo } from "react";
import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  Grid,
  TextField,
  InputAdornment,
  InputBase
} from "@material-ui/core";
import { connect } from "react-redux";
import { useCallback } from "react";
import { Menu as MenuIcon, Search as SearchIcon } from "@material-ui/icons";
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
      <Toolbar className={classes.toolbar}>
        <div className={classes.firstRow}>
          <div className={classes.menuBox}>
            <div className={classes.p10}>
              <MenuIcon
                data-el_name="btnToggleMenu"
                data-el_target="isSidebarOpen"
                onClick={handleClick}
                className={isSidebarOpen ? classes.hide : classes.menuButton}
              />
            </div>

            <div className={classes.searchBox}>
              <div className={classes.p10}>
                <SearchIcon />
              </div>
              <div className={classes.searchInputContainer}>
                <InputBase 
                  fullWidth
                  className={classes.searchInput}
                  type="search"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h6>Avatar options</h6>
        </div>
      </Toolbar>
    </AppBar>
  );
});

const mapDispatchToProps = dispatch => ({
  setVal: (name, value) => dispatch(setVal(name, value))
});
const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
