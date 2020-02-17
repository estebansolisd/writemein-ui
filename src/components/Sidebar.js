import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { loadTodos } from "../actions/todoActions";
const Sidebar = memo(props => {
  useEffect(() => {
    props.loadTodos();
  }, []);
  return <h1>Hola</h1>;
});

const mapDispatchToProps = dispatch => {
  return {
    loadTodos: ()=> dispatch(loadTodos())
  };
};

const mapStateToProps = ({ todos }) => {
  return {
    todos
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
