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
        <table>
            <tbody>
                {todos &&
                    todos.map((todo, i) => (
                        <tr key={i}>
                            <th>{todo.title}</th>
                            <td>
                                <button style={btnStyle} onClick={() => completeTodo(i)}>
                                    {todo.complete ? "完了" : "未完了"}
                                </button>
                                <button style={btnStyleDelete}
                                    className="bg-slate-200"
                                    onClick={() => removeTodo(i)}>
                                    削除
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}