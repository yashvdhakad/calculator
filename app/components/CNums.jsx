import CNum from "./CNum"

const CNums = () => {
    return (
        <div className="p-2 rounded shadow shadow-black/20 grid grid-cols-4 gap-2">
                <CNum num="Clear" />
                <CNum num="C" />
                <CNum num={9} />
                <CNum num={8} />
                <CNum num={7} />
                <CNum num={6} />
                <CNum num={5} />
                <CNum num={4} />
                <CNum num={3} />
                <CNum num={2} />
                <CNum num={1} />
                <CNum num={0} />
                <CNum num="+" />
                <CNum num="-" />
                <CNum num="*" />
                <CNum num="/" />
                <CNum num="%" />
                <CNum num="=" />
        </div>
    )
}

export default CNums