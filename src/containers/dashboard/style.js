import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  p10: {
    padding: 10
  },
  dashboardHeader: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    height: "auto",
    padding: 10
  },
  dashboardContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 10
  },
  noResultsContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  dashboardContent: {
    height: "auto",
    overflow: "auto"
  },
  paper: {
    height: `calc(100vh - 112px)`,
    borderTop: "2px solid #77dccf",
    width: "100%",
    marginTop: 70
  }
}));
