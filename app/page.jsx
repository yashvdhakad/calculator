"use client";
import CFrame from "./components/CFrame";
import NumState from "./context/NumState";

export default function Home() {
  return (
    <NumState>
      <main className="max-w-screen-lg h-screen m-auto border">
        <CFrame />
      </main>
    </NumState>
  )
}
