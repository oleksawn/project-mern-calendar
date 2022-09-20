import { createSlice } from '@reduxjs/toolkit';
import { getTasks, postTask } from './redux-thunks';

const task = createSlice({
  name: 'task',
  initialState: {
    tasks: [],
    status: null,
    error: null,
  },
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
    },
  },
  extraReducers: {
    [getTasks.pending]: (state, action) => {
      console.log('pending!!!');
      state.status = 'loading';
      state.error = null;
    },
    [getTasks.fulfilled]: (state, action) => {
      console.log('fulfilled!!!');
      state.status = 'resolved';
      state.tasks = action.payload;
      state.error = null;
    },
    [getTasks.rejected]: (state, action) => {
      console.log('rejected!!!');
      state.status = 'rejected';
      state.error = action.error;
    },
    [postTask.pending]: (state, action) => {
      console.log('pending!!!');
      state.error = null;
    },
    [postTask.fulfilled]: (state, action) => {
      console.log('fulfilled!!!');
      state.error = null;
    },
    [postTask.rejected]: (state, action) => {
      console.log('rejected!!!');
      state.error = action.error;
    },
  },
});

export default task.reducer;
export const { setTasks } = task.actions;
