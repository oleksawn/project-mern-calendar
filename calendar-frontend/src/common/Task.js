import { Card, CardContent, Typography } from '@mui/material';
import { Checkbox } from '@mui/material';

export default function Task({ task }) {
  const handleStatusChange = () => {
    console.log('toggle!');
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Checkbox
          id={task._id}
          checked={task.done}
          onChange={() => handleStatusChange()}
        />
        <Typography sx={{ fontSize: 16 }} color="text.secondary">
          {task.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
