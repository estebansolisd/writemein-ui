import React, { memo } from "react";
import { useStyles } from "./style";


const TodoBar = memo(props => {
    const classes = useStyles();
    return <div className={classes.todoBar}>

    </div>
});


export default TodoBar;