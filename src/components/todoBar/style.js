import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  todoBar: {
    width: "100%",
    borderTop: "1px solid #efefef",
    borderBottom: "1px solid #efefef",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  dflex: {
    display: "flex"
  },
  justifyCenter: {
    justifyContent:"center"
  },
  justifyBetween:{
    justifyContent:"between"
  },
  alignCenter:{
    alignItems: "center"
  },
  p10: {
    padding: 10
  },
  textLineThrough:{
    textDecoration: "line-through"
  }
}));
