import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';
import ToDoColumn from "./ToDoColumn";

export default function TodoList({ todos, onRemoveToDo }) {
    return (
        <StyledContainer>
        <ToDoColumn status="OPEN" todos={todos} onRemoveToDo={onRemoveToDo}></ToDoColumn>
        <ToDoColumn status="IN_PROGRESS" todos={todos} onRemoveToDo={onRemoveToDo}></ToDoColumn>
        <ToDoColumn status="DONE" todos={todos} onRemoveToDo={onRemoveToDo}></ToDoColumn>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

`

