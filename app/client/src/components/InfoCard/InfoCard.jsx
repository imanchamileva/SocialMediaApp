import React from 'react'
import { BsPencil } from 'react-icons/bs';



export const InfoCard = () => {
    return (
        <div className="bg-white w-72 h-60 rounded-lg flex items-between ml-3 mt-2">
            <div className="flex jsutify-center flex-col w-60 justify-around items-start">
                <div className="pl-4 flex justify-between items-center flex-row w-72 pr-4">
                    <h3 className="font-bold text-lg">Your Info</h3>
                    <div>
                        <BsPencil className="w-10 h-5" />
                    </div>
                </div>

                <div className="pl-4">
                    <div>
                        <span>
                            <b>Status </b>
                        </span>
                        <span>
                            in relationship
                        </span>
                    </div>

                    <div>
                        <span>
                            <b>Lives in </b>
                        </span>
                        <span>
                            Brussels
                        </span>
                    </div>

                    <div>
                        <span>
                            <b>Works at </b>
                        </span>
                        <span>
                            Google
                        </span>
                    </div>
                </div>

                <div className="flex justify-center w-60">
                    <button className="w-36 h-8 rounded-lg text-white bg-orange-500 hover:bg-transparent border-orange-500 hover:text-black border-2  bg-transparent ">Log out</button>
                </div>

            </div>
        </div>
    )
}
