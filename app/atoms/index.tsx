'use client'

import { atom } from "recoil";
import { todoProps } from "../types";

export const atomStateTodos = atom<todoProps[]>({
    key: 'initialTodos',
    default: [{
        title: 'todo1',
        text: '内容',
        complete: false
    }]
});