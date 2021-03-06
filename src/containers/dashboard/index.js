import React, { memo, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { Typography, Paper } from "@material-ui/core";

// Local
import TodoBar from "../../components/todoBar";
import TodoForm from "../../components/todoForm";
import { useStyles } from "./style";
import { loadTodos } from "../../actions/todoActions";

export const Dashboard = memo(props => {
  const classes = useStyles();
  const { todos, filter_todo } = props.todoReducer;

  useEffect(() => {
    props.loadTodos();
    // eslint-disable-next-line
  }, []);

  const filteredTodos = useMemo(
    () =>
      todos.filter(t =>
        t.text.toLowerCase().includes(filter_todo.toLowerCase())
      ),
    [filter_todo, todos]
  );

  return (
    <Paper elevation={3} className={classes.paper}>
      <div className={classes.dashboardContainer}>
        <div className={classes.dashboardHeader}>
          <Typography variant="h5">All Tasks</Typography>
        </div>

        {filteredTodos.length ? (
          <div className={classes.dashboardContent}>
            {filteredTodos.map((todo, i) => (
              <TodoBar key={i} {...{ todo }} />
            ))}
          </div>
        ) : (
          <div className={classes.noResultsContainer}>
            <Typography noWrap variant="body1">
              No todos available please, create one
            </Typography>
          </div>
        )}
      </div>

      <TodoForm />
    </Paper>
  );
});

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  loadTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
