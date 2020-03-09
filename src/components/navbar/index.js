import React, { memo, useCallback } from "react";
import { AppBar, Toolbar, InputBase, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { Search as SearchIcon } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

// Locals
import { setVal } from "../../actions/todoActions";
import { useStyles } from "./style";

const NavBar = memo(props => {
  const history = useHistory();
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
  }, [props]);

  const handleClick = useCallback(e => {
      switch (e.currentTarget.dataset.el_name) {
        case "btnLogout":
          localStorage.removeItem("TOKEN");
          history.push("/");
          break;
        default:
          break;
      }
    }, [])

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
        <Button data-el_name="btnLogout" onClick={handleClick} >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
});

const mapDispatchToProps = dispatch => ({
  setVal: (name, value) => dispatch(setVal(name, value))
});
const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
