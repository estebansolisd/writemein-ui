import React, { memo } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Paper, Typography } from "@material-ui/core";

// Local

import { useStyles } from "./style";

// Route Components
import Dashboard from "../../components/dashboard";

const Content = memo(props => {
  const classes = useStyles();
  const { isSidebarOpen } = props.todoReducer;

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: isSidebarOpen
      })}
    >
      <div className={classes.space} />
      <Paper className={classes.paper}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </Paper>
    </main>
  );
});

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(Content);
