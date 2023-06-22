import CNum from "./CNum"

const CNums = () => {
    return (
        <div className="p-2 rounded shadow shadow-black/20 flex flex-wrap justify-between space-y-2">
            <div className="w-full flex justify-between">
                <CNum num={1} />
                <CNum num={2} />
                <CNum num={3} />
                <CNum num={4} />
                <CNum num={5} />
                <CNum num={6} />
                <CNum num={7} />
                <CNum num={8} />
                <CNum num={9} />
                <CNum num={0} />
            </div>
            <div className="w-full flex justify-evenly">
                <CNum num="+" />
                <CNum num="-" />
                <CNum num="*" />
                <CNum num="/" />
                <CNum num="%" />
            </div>
        </div>
    )
}

export default CNums