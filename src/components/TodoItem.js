import { ListItemButton, ListItemIcon, ListItemText, Checkbox, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

function TodoItem({ todo, index, removeTodo, toggleComplete }) {
  return (
    <ListItemButton role="listitem">
      <ListItemIcon>
        <Checkbox disableRipple checked={todo.completed} onClick={() => toggleComplete(index)} />
      </ListItemIcon>
      <ListItemText primary={todo.task} />
      <ListItemIcon>
        <IconButton onClick={() => removeTodo(index)}>
          <Delete sx={{ color: "error.main" }} />
        </IconButton>
      </ListItemIcon>
    </ListItemButton>
  );
}

export default TodoItem;
