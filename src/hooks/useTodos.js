import { useState } from "react";

const useTodos = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        setTodos([{ task }, ...todos]);
    };

    const toggleCompleted = (index) => {
        const updateTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo,
        );
        setTodos(updateTodos);
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return {
        addTodo,
        toggleCompleted,
        removeTodo,
        setTodos,
        todos,
    };
};

export default useTodos;
