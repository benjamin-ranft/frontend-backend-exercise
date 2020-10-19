import React, {useState} from "react";
import Popup from 'reactjs-popup';

export default function ToDoPopup ({onCreateToDo}) {

    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreateToDo(description);
    }

    return(
    <>
        <Popup trigger={<button> Add Todo</button>} position="right center">
            <form onSubmit={handleSubmit}>
                <label>Description
                </label>
                <input onChange={event => setDescription(event.target.value)}/>
                <button type="submit">Add Todo</button>
            </form>
        </Popup>
    </>
    )}

