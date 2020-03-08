import React, { memo, useState, useCallback } from "react";

// Local
import { useStyles } from "./style";
import {
  Paper,
  IconButton,
  Typography,
  Grid,
  TextField,
  Button,
  Grow
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { connect } from "react-redux";

import { createTodo } from "../../actions/todoActions";
import clsx from "clsx";

const TodoForm = memo(props => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [isShowingForm, setIsShowingForm] = useState(false);

  //   methods

  const handleChange = useCallback(e => {
    switch (e.target.name) {
      case "txtTextTodo":
        setText(e.target.value);
        break;
      default:
        break;
    }
  }, []);

  const handleClick = useCallback(e => {
    switch (e.currentTarget.dataset.el_name) {
      case "btnShowForm":
        setIsShowingForm(prev => !prev);
        break;
      default:
        break;
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      props.createTodo({
        text,
        is_completed: false
      });
      setIsShowingForm(false);
      setText("")
    },
    [props, text]
  );

  return (
    <div className={classes.todoFormContainer}>
      <Grow in={isShowingForm}>
        <Paper
          className={classes.paper}
          component="form"
          onSubmit={handleSubmit}
          elevation={3}
        >
          <Grid container className={classes.p10}>
            <Grid item xs={12} className={classes.p10}>
              <Typography variant="h5" noWrap>
                Create your todo
              </Typography>
            </Grid>

            <Grid item xs={12} className={classes.p10}>
              <TextField
                fullWidth
                required
                placeholder="Write your todo here.."
                name="txtTextTodo"
                value={text}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} className={classes.p10}>
              <Button
                type="submit"
                variant="contained"
                className={classes.todoAddButton}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grow>
      <div className={classes.p10}>
        <IconButton
          data-el_name="btnShowForm"
          onClick={handleClick}
          className={classes.todoAddButton}
          aria-label="Add Todo"
        >
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
});

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  createTodo: todo => dispatch(createTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
