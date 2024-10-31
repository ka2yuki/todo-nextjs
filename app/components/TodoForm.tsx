'use client';

import { FormEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { atomStateTodos } from "../atoms";
import { btnStyleAdd, inputStyle } from "../styles";

export default function InputForm() {
    const [todos, setTodos] = useRecoilState(atomStateTodos);
    const [inputValue, setInputValue] = useState("");
    const [textareaValue, setTextAreaValue] = useState("");

    const addTodo = (word: string, content: string) => {
        const newTodos = [...todos, { word, content, ex: null, url: null, complete: false }];
        setTodos(newTodos);
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        addTodo(inputValue, textareaValue);
        setInputValue("");
        setTextAreaValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                style={inputStyle}
                placeholder="タイトル"
                onChange={(e) => setInputValue(e.target.value)} />
            <textarea
                rows={3}
                style={inputStyle}
                placeholder="内容"
                onChange={(e) => setTextAreaValue(e.target.value)}></textarea>
            {/* <Link href={"/list"}> */}
            <button style={btnStyleAdd} type="submit">ADD</button>
            {/* </Link> */}
        </form>
    )
}