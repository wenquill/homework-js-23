import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './slices/ToDoSlice'

const store = configureStore({
   reducer: {
      toDo: toDoReducer,
   },
})

export default store
