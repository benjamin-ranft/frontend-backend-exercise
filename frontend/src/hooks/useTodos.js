import { useEffect, useState } from 'react';
import {addTodo, deleteToDo, getTodos, putToDo} from '../service/todo-service';

export default function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then((todos) => setTodos(todos));
    }, []);

    const createToDo = (description) => {
        addTodo(description, "OPEN")
            .then(response => response.data)
            .then(data =>setTodos([...todos,data]));
    }

    const removeToDo = (id) => {
        deleteToDo(id)
            .then(() => setTodos(todos.filter(todo => todo.id !== id)))
    }

    const updateToDo = (id, description, status) => {

        putToDo(id, description, status)
            .then(response => response.data)
            .then(data =>setTodos([...todos.filter(todo => todo.id !== id),data]))

    }

    return [todos,createToDo, removeToDo, updateToDo];
}
