import React, { memo } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Paper } from "@material-ui/core";

// Local componenets and modules

import { useStyles } from "./style";
import TodoForm from "../../components/todoForm";

// Route Components
import Dashboard from "../../components/dashboard";

const Content = memo(props => {
  const classes = useStyles();
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <Paper elevation={3} className={classes.paper}>
            <Dashboard />
            <TodoForm />
          </Paper>
        </Route>
      </Switch>
    </Router>
  );
});

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(Content);
