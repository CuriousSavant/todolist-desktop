import { List } from '@mui/material';
import TodoItem from './TodoItem';

function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <List dense component="div" role="list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
  );
}

export default TodoList;
