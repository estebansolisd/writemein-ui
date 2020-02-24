import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  fullSize: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  dock: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%"
  }
});
