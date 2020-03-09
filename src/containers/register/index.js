import React, { memo, useCallback, useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useHistory, Link } from "react-router-dom";

// Local
import { useStyles } from "./style";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
const Register = memo(props => {
  const classes = useStyles();
  const history = useHistory();
  const { isErrorOnRegister, errorRegisterMessage } = props.authReducer;
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    name:"",
    email: "",
    password: ""
  });

  // Event handlers

  const handleClick = useCallback(e => {
    switch (e.currentTarget.dataset.el_name) {
      case "btnShowPassword":
        setIsShowingPassword(prev => !prev);
        break;
      default:
        break;
    }
  }, []);

  const handleChange = useCallback(e => {
    switch (e.target.name) {
      case "name":
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
          props.register(credentials, history);
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
                  placeholder="Write your name..."
                  name="name"
                  onChange={handleChange}
                  value={credentials.name}
                />
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
                  type={isShowingPassword ? "text" : "password"}
                  placeholder="Write your password..."
                  name="password"
                  onChange={handleChange}
                  value={credentials.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton
                          onClick={handleClick}
                          data-el_name="btnShowPassword"
                        >
                          {isShowingPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>

              {isErrorOnRegister && (
                <Grid item xs={12} className={classes.p10}>
                  <Typography variant="body1" color="error">
                    {errorRegisterMessage}
                  </Typography>
                </Grid>
              )}

              <Grid item xs={12} className={classes.p10}>
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.btnLogin}
                >
                  Register
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12} container justify="flex-end">
              <Link to="/" className={classes.linkRegister}>
                Login
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
  register: (credentials, history) => dispatch(register(credentials, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
