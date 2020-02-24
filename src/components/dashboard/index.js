import React, { memo } from "react";
import { connect } from "react-redux";

export const Dashboard = memo(props => {
  return <h1>Hola</h1>;
});

const mapStateToProps = ({ todos }) => ({
  todos
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
