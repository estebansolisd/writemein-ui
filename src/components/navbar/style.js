import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  toolbar: {
    background: "#77dccf",
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
  },
  linkLogout:{
    textDecoration: "none"
  }
}));
