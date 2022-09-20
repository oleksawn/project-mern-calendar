import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Task from '../../common/Task';

export default function Tasks() {
  const { tasks, error, status } = useSelector((state) => state.task) || []; // get state from store
  console.log(tasks, error, status);
  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {tasks.length > 0 &&
        tasks.map((task) => {
          return <Task task={task} key={task._id} />;
        })}
    </div>
  );
}
