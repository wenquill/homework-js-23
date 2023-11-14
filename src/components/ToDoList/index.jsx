import React from "react";
import { connect } from "react-redux";
import ToDoTask from "../ToDoTask";

function ToDoList({ toDo }) {
  return (
    <ul>
      {toDo.map((todo) => (
        <ToDoTask todo={todo} key={todo.id}></ToDoTask>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return state.toDo;
};

export default connect(mapStateToProps)(ToDoList);
