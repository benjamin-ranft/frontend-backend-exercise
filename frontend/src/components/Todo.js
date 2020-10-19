import React from 'react';
import styled from 'styled-components';

export default function Todo({ id, status, description, onRemoveToDo}) {
    return (
        <StyledTodo>
            <h3>{description}</h3>
            <button onClick={()=> onRemoveToDo(id)}>Delete</button>
        </StyledTodo>
    );
}

const StyledTodo = styled.section`
    background-color: white;
    border-radius: 10px;
    padding: 10px;
`;
