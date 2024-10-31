"use client"

import InputForm from "./components/TodoForm";
import List from "./components/TodoList";
import { RecoilRoot } from "recoil";
import { h1Style } from "./styles";

export default function Home() {
  // const pathname = document.location.pathname;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-0 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-3 row-start-2 items-center sm:items-start">
        <h1 style={h1Style}>English Words for Development</h1>
        <p>主に開発にてエラー文やコンソール上に表示される文字、ドキュメントなどで遭遇しそうな英単語からなんか似ている英単語までを覚えて行くための個人的なアプリです。</p>
        <RecoilRoot>
          <InputForm />
          <List />
          {/* {
            pathname == "list" ? <List /> : <></>
          } */}
        </RecoilRoot>
      </main>
    </div>
  );
}
