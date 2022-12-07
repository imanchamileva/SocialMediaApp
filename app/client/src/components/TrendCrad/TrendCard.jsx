import { TrendData } from "../../Data/TrendData.js"



function TrendCard() {
    return (
        <div className="flex items-center flex-col justify-evenly bg-red-500 h-3/5">
            <div className="p-12 grid gap-y-4 w-72 rounded-lg bg-white justify-evenly">
                <h3 className="font-bold text-xl">Trends for you</h3>
                {TrendData.map((data, id) => {
                    return <div className="p-2">
                        <div className="font-bold" id={id}>#{data.name}</div>
                        <div>{data.shares} shares</div>
                    </div>
                })}
            </div>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 rounded-lg w-48 h-12 text-white text-xl">Share</button>
        </div>
    )
}

export default TrendCard