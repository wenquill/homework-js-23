import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './slices/ToDoSlice'
import postsReducer from './slices/PostsSlise'

const store = configureStore({
   reducer: {
      toDo: toDoReducer,
      postsList: postsReducer,
   },
})

export default store
