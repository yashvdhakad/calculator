import CDisplay from "./CDisplay";
import CNums from "./CNums";

const CFrame = () => {
  return (
    <section className="lg:m-40 p-6 bg-slate-800 rounded-lg shadow shadow-black/20 space-y-6">
        <CDisplay />
        <CNums />
    </section>
  )
}

export default CFrame