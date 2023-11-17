import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as API from '../../api'

const POST_SLICE_NAME = 'posts'

const initialState = {
   posts: [],
   isFetching: false,
   error: null,
}

export const getPostsThunk = createAsyncThunk(
   `${POST_SLICE_NAME}/getPosts`,
   async (payload, thunkAPI) => {
      try {
         const { data } = await API.getPosts()
         return data
      } catch (error) {
         return thunkAPI.rejectWithValue({ message: error.message })
      }
   }
)

const PostsSLise = createSlice({
   name: POST_SLICE_NAME,
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder.addCase(getPostsThunk.pending, state => {
         state.isFetching = true
         state.error = null
      })

      builder.addCase(getPostsThunk.rejected, (state, { payload }) => {
         state.isFetching = false
         state.error = payload
      })

      builder.addCase(getPostsThunk.fulfilled, (state, { payload }) => {
         state.posts = payload
         state.isFetching = false
      })
   },
})

const { reducer, actions } = PostsSLise

export default reducer
