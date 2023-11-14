import React from "react";
import ToDoForm from "../../components/ToDoForm";
import ToDoList from "../../components/ToDoList";
import { connect } from "react-redux";

function ToDoApp({ toDo }) {
  console.log(toDo);
  return (
    <main>
      <h1>Todo App</h1>
      <ToDoForm />
      <ToDoList />
      <p>
        You have {toDo.length} {toDo.length === 1 ? "task" : "tasks"}
      </p>
    </main>
  );
}

const mapStateToProps = (state) => {
  return state.toDo;
};

export default connect(mapStateToProps, null)(ToDoApp);
