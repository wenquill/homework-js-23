import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  toDo: [],
};

const ToDoSlice = createSlice({
  initialState,
  name: "toDo",
  reducers: {
    addTask: (state, { payload }) => {
      state.toDo.push({ ...payload, isDone: false, id: uuidv4() });
    },
    deleteTask: (state, { payload }) => {
      state.toDo = state.toDo.filter((todo) => todo.id !== payload);
    },
    markAsDone: (state, { payload: { id, data } }) => {
      const { toDo } = state;
      const updatedTodoIndex = toDo.findIndex((todo) => todo.id === id);
      toDo[updatedTodoIndex] = {
        ...toDo[updatedTodoIndex],
        ...data,
      };
    },
    markAsOverdue: (state, action) => {},
  },
});

const { reducer, actions } = ToDoSlice;
export const { addTask, deleteTask, markAsDone, markAsOverdue } = actions;
export default reducer;
