import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
//todo 第三階段
export const updateUser2 = createAsyncThunk('users/update', async (user) => {
  const res = await axios.post(
    'http://localhost:8800/api/users/123/update',
    user
  )
  return res.data
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      name: 'anna',
      email: 'anna@gmai.com',
    },
    pending: null,
    error: false,
  },
  reducers: {
    //todo 第二階段
    // updateStart: (state) => {
    //   state.pending = true
    // },
    // updateSuccess: (state, action) => {
    //   state.pending = false
    //   state.userInfo = action.payload
    // },
    // updateError: (state) => {
    //   state.error = true
    //   state.pending = false
    // },
    //todo 第一階段
    // update: (state, action) => {
    //   state.name = action.payload.name
    //   state.email = action.payload.email
    // },
    // remove: (state) => (state = {}),
    // addHello: (state, action) => {
    //   state.name = 'Hello' + action.payload.name
    // },
  },
  //todo 第三階段
  extraReducers: {
    [updateUser2.pending]: (state) => {
      state.pending = true
      state.error = false
    },
    [updateUser2.fulfilled]: (state, action) => {
      state.pending = false
      state.userInfo = action.payload
    },
    [updateUser2.rejected]: (state) => {
      state.pending = null
      state.error = true
    },
  },
})
export const { updateStart, updateSuccess, updateError } = userSlice.actions
// export const { update, remove, addHello } = userSlice.actions
export default userSlice.reducer
