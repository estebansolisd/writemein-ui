import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  appBarShift: {
    width: `calc(100% - 240px)`,
    marginLeft: 240,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  hide: {
    display: "none"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  toolbar: {
    background: "#fff",
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  menuBox: {
    display: "flex",
    alignItems: "center"
  },
  p10: {
    padding: 10
  },
  menuButton: {
    cursor: "pointer"
  },
  firstRow: {
    flex: 1
  },
  searchBox: {
    flex: 1,
    display: "flex",
    alignItems: "center"
  },
  searchInput: {
    borderBottom: "1px solid #ccc"
  },
  searchInputContainer: {
    flex: 1,
    padding: 10
  }
}));
