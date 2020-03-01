import React, { memo, useCallback } from "react";
import { Checkbox, Typography, IconButton, InputBase } from "@material-ui/core";
import clsx from "clsx";
import { connect } from "react-redux";

// Local
import { useStyles } from "./style";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { setVal } from "../../actions/todoActions";

const TodoBar = memo(props => {
  const classes = useStyles();
  const handleKeyDown = useCallback(e => {
    props.setVal(e.target.name, e.target.value);
  }, []);

  return (
    <div className={classes.todoBar}>
      <div className={clsx(classes.dflex, classes.alignCenter)}>
        <Checkbox color="#efe" />
        <InputBase value={props.todo.text} onKeyDown={handleKeyDown} />
      </div>

      <div className={clsx(classes.dflex, classes.alignCenter)}>
        <div className={classes.p10}>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
        <div className={classes.p10}>
          <Typography
            variant="body1"
            noWrap
            className={props.todo.is_completed && classes.textLineThrough}
            title="This is the date when the todo was created"
          >
            {new Date(props.todo.created_at).toLocaleString()}
          </Typography>
        </div>
      </div>
    </div>
  );
});

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  setVal: (name, value) => dispatch(setVal(name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoBar);
