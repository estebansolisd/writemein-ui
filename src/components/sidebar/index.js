import React, { memo } from "react";
import { connect } from "react-redux";
import { useCallback } from "react";
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItemText,
  useTheme,
  ListItem,
  ListItemIcon,
  Typography
} from "@material-ui/core";
import { ChevronLeft, ChevronRight, Inbox, Mail } from "@material-ui/icons";

import { setVal } from "../../actions/todoActions";
import { useStyles } from "./style";

const Sidebar = memo(props => {
  const classes = useStyles();
  const theme = useTheme();
  const { isSidebarOpen } = props.todoReducer;
  const handleClick = useCallback(
    e => {
      switch (e.currentTarget.dataset.el_name) {
        case "btnToggleMenu":
          props.setVal(e.currentTarget.dataset.el_target, !isSidebarOpen);
          break;
        default:
          break;
      }
    },
    [props, isSidebarOpen]
  );

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={isSidebarOpen}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <Typography variant="h4">
          TO-DO's  
        </Typography>
        <IconButton
          onClick={handleClick}
          data-el_name="btnToggleMenu"
          data-el_target="isSidebarOpen"
        >
          {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <Inbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <Inbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
});

const mapDispatchToProps = dispatch => {
  return {
    setVal: (name, value) => dispatch(setVal(name, value))
  };
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
