import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    posts: []
}

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (_, { rejectWithValue, dispatch }) => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(setPosts(result.data))
    }
)

export const removePostById = createAsyncThunk(
    'posts.removePostById',
    async (id, { rejectWithValue, dispatch }) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(removePost(id))
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        }

    },
    extraReducers: {
        [getPosts.fulfilled]: () => console.log('getPost fullfild'),
        [getPosts.pending]: () => console.log('getPost panding'),
        [getPosts.rejected]: () => console.log('getPost rejected'),
        [removePostById.fulfilled]: () => console.log('removePost fullfild'),
        [removePostById.pending]: () => console.log('removePost panding'),
        [removePostById.rejected]: () => console.log('removePost rejected')
    }
})

export const { setPosts, removePost } = postSlice.actions
export default postSlice.reducer 