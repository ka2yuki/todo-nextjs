'use client';

import { FormEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { atomStateTodos } from "../atoms";

export default function InputForm() {
    const [todos, setTodos] = useRecoilState(atomStateTodos);
    const [inputValue, setInputValue] = useState("");

    const addTodo = (title: string) => {
        const newTodos = [...todos, { title, complete: false }];
        setTodos(newTodos);
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
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