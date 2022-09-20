import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTask } from '../../redux-thunks';
import { FormGroup, Input, Button } from '@mui/material';

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();

  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleTaskSubmit = () => {
    dispatch(postTask({ title: taskTitle }));
    setTaskTitle('');
  };

  return (
    <FormGroup>
      <Input
        sx={{ width: 300, border: '2px solid blue' }}
        placeholder="Add new task here..."
        value={taskTitle}
        onChange={(e) => handleTaskTitleChange(e)}
        multiline
      />
      <Button sx={{ width: 300 }} variant="outlined" onClick={handleTaskSubmit}>
        Save
      </Button>
    </FormGroup>
  );
};

export default AddTask;
