"use client"

import Image from "next/image";
import List from "./components/TodoList";
import InputForm from "./components/TodoForm";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">app/page.tsx</code>
        <RecoilRoot>
          <List />
          <InputForm />
        </RecoilRoot>
      </main>
    </div>
  );
}
