import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './redux-slice';

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
export default store;


