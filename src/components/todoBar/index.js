import React, { memo, useCallback, useState, useEffect } from "react";
import { Checkbox, Typography, IconButton, InputBase } from "@material-ui/core";
import clsx from "clsx";
import { connect } from "react-redux";

// Local
import { useStyles } from "./style";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { setVal, deleteTodo, updateTodo } from "../../actions/todoActions";

const TodoBar = memo(props => {
  const classes = useStyles();
  const { todo } = props;
  const [updatedTodo, setUpdatedTodo] = useState({
    _id: -1,
    is_completed: false,
    text: ""
  });

  useEffect(() => {
    let { is_completed, text, _id } = todo;

    setUpdatedTodo({
      is_completed,
      text,
      _id
    });
  }, [todo]);

  // methods

  const handleChange = useCallback(
    e => {
      switch (e.target.name) {
        case "chkIsCompleted":
          let { checked } = e.target;
          setUpdatedTodo(prevTodo => ({ ...prevTodo, is_completed: checked }));
    
          if (updatedTodo._id !== -1) {
            props.updateTodo({...updatedTodo, is_completed: checked});
          }
          break;
        case "txtText":
          let { value } = e.target;
          setUpdatedTodo(prevTodo => ({ ...prevTodo, text: value }));
          break;
        default:
          break;
      }
    },
    [updatedTodo, props]
  );

  const handleKeyDown = useCallback(
    e => {
      if (updatedTodo._id !== -1 && e.which === 13) {
        e.target.blur();
        props.updateTodo(updatedTodo);
      }
    },
    [updatedTodo, props]
  );

  const handleClick = useCallback(
    e => {
      switch (e.currentTarget.dataset.el_name) {
        case "btnDeleteTodo":
          props.deleteTodo(todo._id);
          break;
        default:
          break;
      }
    },
    // eslint-disable-next-line
    [todo._id]
  );

  return (
    <div className={classes.todoBar}>
      <div className={clsx(classes.dflex, classes.alignCenter)}>
        <Checkbox
          color="primary"
          onChange={handleChange}
          name="chkIsCompleted"
          checked={updatedTodo.is_completed}
        />
        <InputBase
          className={updatedTodo.is_completed ? classes.textLineThrough : null}
          value={updatedTodo.text}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          name="txtText"
        />
      </div>

      <div className={clsx(classes.dflex, classes.alignCenter)}>
        <div className={classes.p10}>
          <IconButton onClick={handleClick} data-el_name="btnDeleteTodo">
            <DeleteIcon />
          </IconButton>
        </div>

        <div className={classes.p10}>
          <Typography
            variant="body1"
            noWrap
            title="This is the date when the todo was created"
          >
            {new Date(todo.created_at).toLocaleString()}
          </Typography>
        </div>
      </div>
    </div>
  );
});

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  setVal: (name, value) => dispatch(setVal(name, value)),
  deleteTodo: _id => dispatch(deleteTodo(_id)),
  updateTodo: todo => dispatch(updateTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoBar);
