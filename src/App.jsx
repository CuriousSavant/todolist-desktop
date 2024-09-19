import { useState } from 'react';
import {
  ThemeProvider,
  Container,
  Typography,
  TextField,
  Button,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from '@mui/material';
import theme from './lib/theme';
import useTodos from './hooks/useTodos';
import { Delete } from '@mui/icons-material';

function App() {
  const [task, setTask] = useState('')
  const [completed, setCompleted] = useState(false)

  const {
    todos,
    addTodo,
    removeTodo
  } = useTodos()

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task)
    // reset state value
    setTask('')
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box>
          <Typography variant="h4" align="center" mt={'4rem'} gutterBottom>
            Todolist
          </Typography>
          <form onSubmit={handleSubmit}>
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
          </form>
          <List dense component="div" role="list">
            {todos.map((todo, index) => {
              return (
                <ListItemButton
                  key={index}
                  role="listitem"
                >
                  <ListItemIcon>
                    <Checkbox disableRipple onClick={() => { setCompleted(!completed), console.log(completed) }} />
                  </ListItemIcon>
                  <ListItemText primary={todo.task} />
                  <ListItemIcon>
                    <IconButton>
                      <Delete onClick={() => removeTodo(index)} sx={{ color: "error.main" }} />
                    </IconButton>
                  </ListItemIcon>
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Container>
    </ThemeProvider >
  );
}

export default App;