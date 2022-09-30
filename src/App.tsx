import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {json} from "stream/consumers";

type PropsType = {
    completed: boolean,
    id: number,
    title: string,
    userId: number,
}

function App() {

    const [todos, setTodos] = useState<Array<PropsType>>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, []);



    const onClickHandler = () => {
        setTodos([]);
    }

    return (
        <div className="App">
            <button onClick={onClickHandler}>Clean Posts</button>

            <ul>
                {todos.map((el) => {
                    return (
                        <li>
                            <span>{el.id} -</span>
                            <span> {el.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
