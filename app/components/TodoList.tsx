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
        const newTodos = [...todos];
        newTodos[index].complete = !newTodos[index].complete;
        setTodos(newTodos);
    };

    return (
        <ul className="flex flex-col gap-3">
            {todos &&
                todos.map((todo, i) => (
                    <li key={i} className="border border-current">
                        <div className="flex flex-col items-start">
                            <h3>{todo.complete ? "完了" : "未完了"} タイトル：{todo.title}</h3>
                            <p>Description: {todo.text}</p>
                        </div>
                        <div className="flex justify-end gap-2">
                            <button style={btnStyle} onClick={() => completeTodo(i)}>
                                {todo.complete ? "完了" : "未完了"}
                            </button>
                            <button style={btnStyleDelete}
                                className="bg-slate-200"
                                onClick={() => removeTodo(i)}>
                                削除
                            </button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}