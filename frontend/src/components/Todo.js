import React from 'react';
import styled from 'styled-components';

export default function Todo({ id, status, description, onRemoveToDo, onUpdateToDo}) {
    return (
        <StyledTodo>
            <h3>{description}</h3>
            <button onClick={()=> onRemoveToDo(id)}>Delete</button>
            {status === "OPEN" && <button onClick={()=> onUpdateToDo (id,description,"IN_PROGRESS")}>In Progress</button>}
            {status === "IN_PROGRESS" && <button onClick={()=> onUpdateToDo (id,description,"DONE")}>Done</button>}
        </StyledTodo>
    );
}

const StyledTodo = styled.section`
    background-color: rgba(255,255,255,1);
    border-radius: 10px;
    padding: 10px;
    color: darkred;
    
    button{
    margin: 5px;
    border-color: transparent;
    border-radius: 5px;
    color: white;
    background-color: darkred;
    font-weight: bold;
    }
    
    button:hover{
    background-color: transparent;
    border-color: darkred;
    color: darkred;
    border-style: solid ;
    
    }
`;
