import React from 'react';
import styled from 'styled-components/macro';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import AddTodoPopup from "./components/AddTodoPopup";


export default function App() {

    const [todos, createToDo, removeToDo] = useTodos();

    return (
        <Main>
            <h1>Super Kanban Board</h1>
            <AddTodoPopup onCreateToDo={createToDo}/>
            <TodoList todos={todos} onRemoveToDo={removeToDo}/>
        </Main>
    );
}

const Main = styled.main`
    height: 100vh;
    padding: 8px;

    h1 {
        color: hotpink;
    }
`;
