'use client'

import { atom } from "recoil";
import { todos } from "../types";

export const atomStateTodos = atom<todos[]>({
    key: 'initialTodos',
    default: [{
        title: 'todo1', complete: false
    }]
});