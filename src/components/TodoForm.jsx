import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";


const TodoForm = () => {
    const[text, setText] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text, description));

        setText('');
        setDescription('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }
    const onInputhange = (e) => {
        setDescription(e.target.value);
    }
    return (
        <>
        <form className="form">
            <input 
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
            
            <input 
                placeholder="Enter its description..."
                className="input"
                onChange={onInputhange}
                value={description}
            />
        </form>
        <button className="button button1" onClick={onFormSubmit}>Submit</button>
        </>
    )
}

export default TodoForm;