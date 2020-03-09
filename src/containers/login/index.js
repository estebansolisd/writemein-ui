import React, { memo, useCallback, useState } from "react";
import { Grid, Typography, TextField, Button, Paper } from "@material-ui/core";
// Local
import { useStyles } from "./style";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../actions/authActions";
const Login = memo(props => {
  const classes = useStyles();
  const history = useHistory();
  const { isErrorOnLogin, errorLoginMessage } = props.authReducer;
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  // Event handlers

  const handleChange = useCallback(e => {
    switch (e.target.name) {
      case "email":
      case "password":
        let { name, value } = e.target;
        setCredentials(prevCredentials => ({
          ...prevCredentials,
          [name]: value
        }));
        break;
      default:
        break;
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      switch (e.currentTarget.dataset.el_name) {
        case "frmLogin":
          e.preventDefault();
          props.login(credentials, history);
          break;
        default:
          break;
      }
    },
    [props, credentials, history]
  );

  return (
    <div className={classes.root}>
      <Grid
        container
        item
        xs={11}
        md={4}
        component="form"
        onSubmit={handleSubmit}
        data-el_name="frmLogin"
      >
        <Paper className={classes.p10}>
          <Grid container>
            <Grid item xs={12} container>
              <Grid item xs={12} className={classes.p10}>
                <Typography variant="h3" noWrap>
                  TODO-APP
                </Typography>
              </Grid>

              <Grid item xs={12} className={classes.p10}>
                <TextField
                  fullWidth
                  required
                  placeholder="Write your email..."
                  name="email"
                  onChange={handleChange}
                  value={credentials.email}
                />
              </Grid>

              <Grid item xs={12} className={classes.p10}>
                <TextField
                  fullWidth
                  required
                  type="password"
                  placeholder="Write your password..."
                  name="password"
                  onChange={handleChange}
                  value={credentials.password}
                />
              </Grid>

              {isErrorOnLogin && (
                <Grid item xs={12} className={classes.p10}>
                  <Typography variant="body1" color="error">
                    {errorLoginMessage}
                  </Typography>
                </Grid>
              )}

              <Grid item xs={12} className={classes.p10}>
                <Button type="submit" variant="contained" className={classes.btnLogin}>
                  Login
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12} container justify="flex-end">
              <Link to="/register" className={classes.linkRegister}>
                Register
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
});

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  login: (credentials, history) => dispatch(login(credentials, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
