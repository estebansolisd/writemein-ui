import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  p10: {
    padding: 10
  },
  root: {
    padding: 10,
    height: `calc(100vh - 112px)`,
    width: "calc(100vw - 28px)",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  btnLogin:{
    background: "#77dccf",
    color: "white"
  },
  btnRegister: {
    background: "white",
    color: "#77dccf"
  },
  linkRegister: {
    textDecoration:"none"
  }
}));
