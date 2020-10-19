import axios from 'axios';

const url = "/api/todo/"
export const getTodos = () =>
    axios.get(url).then((response) => response.data);

export const addTodo = (description, status) =>
    axios.post(url,{description,status})

export const deleteToDo = (id) =>
    axios.delete(url + id)

