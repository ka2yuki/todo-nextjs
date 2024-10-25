'use client';

import { FormEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { atomStateTodos } from "../atoms";
import Link from "next/link";
import { btnStyleAdd, formStyle, inputStyle } from "../styles";

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
        <form style={formStyle} onSubmit={handleSubmit}>
            <input
                style={inputStyle}
                placeholder="タイトル"
                onChange={(e) => setInputValue(e.target.value)} />
            {/* <Link href={"/list"}> */}
            <button style={btnStyleAdd} type="submit">ADD</button>
            {/* </Link> */}
        </form>
    )
}