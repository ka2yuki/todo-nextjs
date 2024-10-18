'use client';

interface todos {
    title: string,
    complete: boolean
};

export default function List() {
    // state
    let todos: todos[] = [
        { title: 'todo1', complete: false },
        { title: 'todo2', complete: false },
        { title: 'todo3', complete: false }
    ];
    // functions
    const completeTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos[index].complete = !newTodos[index].complete;
        todos = newTodos;
    };
    const removeTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        todos = newTodos;
    };

    return (
        <table>
            <tbody>
                {todos &&
                    todos.map((todo, i) => (
                        <tr key={i}>
                            <th>{todo.title}</th>
                            <td>
                                <button onClick={() => completeTodo(i)}>
                                    {todo.complete ? "完了" : "未完了"}
                                </button>
                                <button onClick={() => removeTodo(i)}>
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