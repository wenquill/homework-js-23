import React from "react";
import { connect } from "react-redux";
import { deleteTask, markAsDone } from "../../store/slices/ToDoSlice";
import styles from "./ToDoTask.module.css";

function ToDoTask({ todo, toDo, removeTask, markDone }) {
  const isDoneHandler = (id, checked) => {
    markDone(id, { isDone: checked });
  };
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={({ target: { checked } }) =>
            isDoneHandler(todo.id, checked)
          }
        />
      </label>
      <span className={todo.isDone ? styles.done : styles.notDone}>
        {todo.value}
      </span>
      <span>{todo.deadline.split("-").join(".")}</span>
      <button onClick={() => removeTask(todo.id)}>delete</button>
    </li>
  );
}

const mapStateToProps = (state) => {
  return state.toDo;
};

const mapDispatchToProps = (dispatch) => ({
  removeTask: (id) => dispatch(deleteTask(id)),
  markDone: (id, data) => dispatch(markAsDone({ id, data })),
});
export default connect(mapStateToProps, mapDispatchToProps)(ToDoTask);
