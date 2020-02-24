import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    flexShrink: 240
  },
  drawerPaper: {
    width: 240
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));
