import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task)
    setTask('') // reset state value
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        variant="outlined"
        margin="normal"
        label="Task"
        InputProps={{ style: { color: 'white' } }}
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <Button type='submit' fullWidth variant="contained" color="primary">
        Add Todo
      </Button>
    </Box>
  );
}

export default TodoForm;
