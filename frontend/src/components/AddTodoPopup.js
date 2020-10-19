import React, {useState} from "react";
import Popup from 'reactjs-popup';
import styled from "styled-components/macro";

export default function ToDoPopup ({onCreateToDo}) {

    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreateToDo(description);
    }

    return(
    <>
        <StyledPopup trigger={<StyledAddButton> Add Todo</StyledAddButton>} position="bottom center">
            <form onSubmit={handleSubmit}>
                <label>Description
                </label>
                <input onChange={event => setDescription(event.target.value)}/>
                <button type="submit">Add Todo</button>
            </form>
        </StyledPopup>
    </>
    )}

    const StyledAddButton = styled.button`
    background: white;
    border-color: transparent;
    padding: 10px 30px;
    border-radius: 10px;
    color: darkred;
    font-weight: bold;
    font-size: 1em;
    display: block;
  margin-left: auto;
  margin-right: auto;
    `

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
  }
  // use your custom style for ".popup-content"
  &-content {
    margin: auto;
  background: darkred;
  border-radius: 10px;
  padding: 15px;
  color: white;
 
  input{
  margin: 10px 10px;
  }
  }
`;

const Modal = () => (
    <StyledPopup
        trigger={<button className="button"> Open Modal </button>}
        modal
        closeOnDocumentClick
    >
        <span> Modal content </span>
    </StyledPopup>
);

