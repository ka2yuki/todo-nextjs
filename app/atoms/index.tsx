'use client'

import { atom } from "recoil";
import { todoProps } from "../types";

export const atomStateTodos = atom<todoProps[]>({
    key: 'initialTodos',
    default: [
        {
            word: 'conventions',
            content: '規約',
            ex: 'convention over configration (CoC) Ruby on Rails',
            url: null,
            complete: false
        },
        {
            word: 'deprecate',
            content: '廃止する',
            ex: 'deprecated module..。 npm installなどで遭遇したりする',
            url: null,
            complete: false
        },
        {
            word: 'duplicate',
            content: '複製する',
            ex: 'duplicate file. 似てる',
            url: null,
            complete: false
        },
        {
            word: 'enable',
            content: '動) 可能にする',
            ex: 'this function enable',
            url: null,
            complete: false
        },
        {
            word: 'able',
            content: '形) 可能な',
            ex: 'this function able to do.',
            url: null,
            complete: false
        },
        {
            word: 'available',
            content: '形) ご利用できる状態',
            ex: 'available module. 似てる',
            url: null,
            complete: false
        },
        {
            word: 'abort',
            content: '動) 中断する',
            ex: 'this execution is aborted. 処理が中断した。などで遭遇する',
            url: null,
            complete: false
        },
        {
            word: 'subset',
            content: '名) 部分集合',
            ex: null,
            url: null,
            complete: false
        },
    ]
});