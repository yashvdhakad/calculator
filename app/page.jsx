"use client";
import CFrame from "./components/CFrame";
import NumState from "./context/NumState";

export default function Home() {
  return (
    <NumState>
      <main className="max-w-screen-lg h-screen m-auto bg-slate-950">
        <CFrame />
      </main>
    </NumState>
  )
}
