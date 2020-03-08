import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  todoFormContainer: {
    position: "fixed",
    left: "50%",
    bottom: -9,
    transform: "translate(-50%, 0%)",
    margin: "0 auto",
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection: "column"
  },
  p10: {
    padding: 10
  },
  paper: {
    padding: 10
  },
  todoAddButton: {
    background: "#77dccf"
  }
}));
