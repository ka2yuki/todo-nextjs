'use client'

import { RecoilRoot } from "recoil";
import List from "../components/TodoList";
import { listTitle } from "../styles";

export default function Page() {
    return (
        <RecoilRoot>
            <h1 style={listTitle}>LIST</h1>
            < List />
        </RecoilRoot>
    );
}