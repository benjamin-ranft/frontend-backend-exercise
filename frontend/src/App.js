import React from 'react';
import styled from 'styled-components/macro';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import AddTodoPopup from "./components/AddTodoPopup";


export default function App() {

    const [todos, createToDo, removeToDo, updateToDo] = useTodos();

    return (
        <Main>
            <img src="/images/Rocket.webp" alt="Spaceship"/>
            <h1>Space Task Board</h1>
            <AddTodoPopup onCreateToDo={createToDo}/>
            <TodoList todos={todos} onRemoveToDo={removeToDo} onUpdateToDo={updateToDo}/>
        </Main>
    );
}

const Main = styled.main`
    height: 100vh;
    padding: 8px;
    background-image: url("/images/space2.gif");
    background-position: center;
    background-repeat: no-repeat;
     background-size: cover;
    
    img{
    height: 100px;
    width: 100px;
    margin-top: 5%;
    display: block;
  margin-left: auto;
  margin-right: auto;
    }
    h1 {
        color: white;
        font-size: 3em;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        display: block;
  margin-left: auto;
  margin-right: auto;
        width: 60%;
       
    }
`;
