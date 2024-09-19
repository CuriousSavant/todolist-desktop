import { useState, useEffect } from "react";

const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");

    const addTodo = (task) => {
        setTodos([{ task }, ...todos]);
    };

    const toggleCompleted = (index) => {
        const updateTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo,
        );
        setTodos(updateTodos);
    };

    const editTodo = (index, newTask) => {
        const updateTodos = todos.map((todo, i) =>
            i === index ? { ...todo, task: newTask } : todo,
        );
        setTodos(updateTodos);
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "completed") return todo.completed;
        if (filter === "incompleted") return !todo.completed;
        return true;
    });

    return {
        filteredTodos,
        addTodo,
        toggleCompleted,
        editTodo,
        removeTodo,
        filter,
        setFilter,
        setTodos,
        todos,
    };
};

export default useTodos;
