// --[Third party modules]--
import React, { memo } from "react";
import { CircularProgress, Grid } from "@material-ui/core";

// --[Local Modules]--
import { useStyles } from "./style";

const Loader = memo(
  props => {
    const classes = useStyles();
    return (
      <Grid
        container
        item
        xs={12}
        justify="center"
        alignItems="center"
        className={props.isFullSize ? classes.fullSize : classes.dock}
      >
        <CircularProgress />
        Loading...
      </Grid>
    );
  },
  (prev, next) => prev.isFullSize !== next.isFullSize
);

export default Loader;
