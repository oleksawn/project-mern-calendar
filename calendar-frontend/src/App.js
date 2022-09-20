import { useDispatch } from 'react-redux';
import Tasks from './components/Tasks/Tasks';
import AddTask from './components/AddTask/AddTask';
import { useEffect } from 'react';
import { getTasks } from './redux-thunks';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <>
      <AddTask />
      <Tasks />
    </>
  );
}
export default App;
