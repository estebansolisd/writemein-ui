import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  p10: {
    padding: 10
  },
  dashboardHeader: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    height: "auto"
  },
  dashboardContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 10
  },
  dashboardContent: {
    height: "auto",
    overflow: "auto"
  }
}));
