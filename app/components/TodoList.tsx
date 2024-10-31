'use client';

import { useRecoilState } from "recoil";
import { atomStateTodos } from "../atoms";
import { btnStyle, btnStyleDelete } from "../styles";

export default function List() {
    const [todos, setTodos] = useRecoilState(atomStateTodos);

    const removeTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    const completeTodo = (index: number) => {
        // const newTodos = [...todos];
        // newTodos[index].complete = !newTodos[index].complete;
        // setTodos(newTodos);
        const newTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, complete: !todo.complete };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    return (
        <ul className="flex flex-col gap-3">
            {todos &&
                todos.map((todo, i) => (
                    <li key={i} className="border border-current">
                        <div className="flex flex-col items-start">
                            <h3>単語：{todo.word}</h3>
                            <p>意味： {todo.content}</p>
                            <p>遭遇する時： {todo.ex}</p>
                        </div>
                        <div className="flex justify-end gap-2">
                            <button style={btnStyle}
                                className="bg-slate-200"
                                onClick={() => removeTodo(i)}>
                                OK
                            </button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}