import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

export default function ToDoColumn ({status, todos, onRemoveToDo, onUpdateToDo}) {

    return(
        <StyledList>
            {todos.filter(todos => todos.status === status)
                .map((todo) => (
                <li key={todo.id}>
                    <Todo {...todo} onRemoveToDo={onRemoveToDo} onUpdateToDo={onUpdateToDo}/>
                </li>
            ))}
        </StyledList>
    );
}

const StyledList = styled.ul`
    list-style: none;
    padding: 0;

    li + li {
        margin-top: 12px;
    }
`;
