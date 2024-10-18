'use client';

import { useState } from "react";

interface todos {
    title: string,
    complete: boolean
};

export default function InputForm() {
    // states
    let todos: todos[] = [
        { title: 'todo1', complete: false }
    ];

    // component state by JavaScript.
    // let inputValue: string;
    // const setInputValue = (text: string) => {
    //     inputValue = text;
    // };

    // component state by React.
    const [inputValue, setInputValue] = useState("");

    const addTodo = (title: string) => {
        const newTodos = [...todos, { title, complete: false }];
        todos = newTodos;
        alert('Button type=Submit!🔥');
    }
    const handleSubmit = (e: SubmitEvent): void => {
        e.preventDefault();
        addTodo(inputValue);
        setInputValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="input someting.."
                onChange={(e) => setInputValue(e.target.value)} />
            <button type="submit">add</button>
        </form>
    )
}