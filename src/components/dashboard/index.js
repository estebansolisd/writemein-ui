import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";

// Local
import TodoBar from "../todoBar";
import { useStyles } from "./style";
import { loadTodos } from "../../actions/todoActions";

export const Dashboard = memo(props => {
  const classes = useStyles();
  const { loadTodos, todos } = props;

  return (
    <div className={classes.dashboardContainer}>
      <div className={classes.dashboardHeader}>
        <Typography variant="h5">All Tasks</Typography>
      </div>

      <div className={classes.dashboardContent}>
        {todos.length &&
          todos
            .filter(t => t.text.includes(""))
            .map(todo => <TodoBar {...{ todo }} />)}
      </div>
    </div>
  );
});

const mapStateToProps = ({ todos }) => ({
  todos
});

const mapDispatchToProps = dispatch => ({
  loadTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
