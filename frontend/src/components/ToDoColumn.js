import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

export default function ToDoColumn ({status, todos, onRemoveToDo, onUpdateToDo}) {

    return(
        <StyledDiv>
        <h2>{status.replace("_"," ")}</h2>
        <StyledList>
            {todos.filter(todos => todos.status === status)
                .map((todo) => (
                <li key={todo.id}>
                    <Todo {...todo} onRemoveToDo={onRemoveToDo} onUpdateToDo={onUpdateToDo}/>
                </li>
            ))}
        </StyledList>
            </StyledDiv>
    );
}

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
width: 30%;
h2 {
color: white;
margin-bottom: 1px;
background-color: rgba(0,0,0,0.2);
border-radius: 10px;
padding: 10px 20px;

}
`




const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;

    li + li {
        margin-top: 12px;
    }
`;
