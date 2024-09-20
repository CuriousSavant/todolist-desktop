import { ThemeProvider, Container, Typography, Box } from '@mui/material';
import theme from './lib/theme';
import useTodos from './hooks/useTodos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const {
    todos,
    addTodo,
    removeTodo,
    toggleComplete
  } = useTodos();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box>
          <Typography variant="h4" align="center" mt={'4rem'} gutterBottom>
            Todolist
          </Typography>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;