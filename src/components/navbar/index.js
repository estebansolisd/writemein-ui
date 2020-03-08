import React, { memo, useCallback } from "react";
import { AppBar, Toolbar, InputBase } from "@material-ui/core";
import { connect } from "react-redux";
import { Search as SearchIcon } from "@material-ui/icons";

import { setVal } from "../../actions/todoActions";
import { useStyles } from "./style";

const NavBar = memo(props => {
  const classes = useStyles();
  const { filter_todo } = props.todoReducer;

  const handleChange = useCallback(e => {
    switch (e.target.name) {
      case "filter_todo":
        props.setVal(e.target.name, e.target.value)
        break;
      default:
        break;
    }
  }, []);

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <div className={classes.firstRow}>
          <div className={classes.menuBox}>
            <div className={classes.searchBox}>
              <div className={classes.p10}>
                <SearchIcon />
              </div>
              <div className={classes.searchInputContainer}>
                <InputBase
                  fullWidth
                  name="filter_todo"
                  onChange={handleChange}
                  value={filter_todo}
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
