import React, { memo, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";

// Local
import TodoBar from "../todoBar";
import { useStyles } from "./style";
import { loadTodos } from "../../actions/todoActions";

export const Dashboard = memo(props => {
  const classes = useStyles();
  const { todos, filter_todo } = props.todoReducer;

  useEffect(() => {
    props.loadTodos();
  }, []);

  
  const filteredTodos = useMemo(
    () =>
      todos.filter(t => t.text.toLowerCase().includes(filter_todo.toLowerCase())),
    [filter_todo, todos]
  );

  return (
    <div className={classes.dashboardContainer}>
      <div className={classes.dashboardHeader}>
        <Typography variant="h5">All Tasks</Typography>
      </div>

      <div className={classes.dashboardContent}>
        {filteredTodos.map((todo, i) => (
          <TodoBar key={i} {...{ todo }} />
        ))}
      </div>
    </div>
  );
});

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  loadTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
