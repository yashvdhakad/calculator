import CDisplay from "./CDisplay";
import CNums from "./CNums";

const CFrame = () => {
  return (
    <section className="m-40 p-6 h-1/2 rounded-lg shadow shadow-black/20 space-y-6">
        <CDisplay />
        <CNums />
    </section>
  )
}

export default CFrame