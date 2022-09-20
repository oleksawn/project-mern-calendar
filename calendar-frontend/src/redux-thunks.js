import { unAuthorizedInstance as API } from './api/axiosInstances';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTasks = createAsyncThunk('task/getTasks', async function () {
  const res = await API.get('/tasks');
  return res.data;
});

export const postTask = createAsyncThunk('task/postTask',async function(task){
  const res = await API.post('/tasks', task);
  return res;
});




