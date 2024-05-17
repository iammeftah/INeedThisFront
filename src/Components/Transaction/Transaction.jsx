import React from 'react';
import Rating from "./Rating";
import Rating2 from "./Rating2";
import "./lines.css";

const Transaction = () => {
    return (
        <div className="text-2xl bg-gray-700 w-full m-4 p-4 rounded-2xl">

            <div className="">
                <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col gap-2">
                        <img className="w-24 sm:w-32 border-2 border-amber-400 aspect-square rounded-xl hover:scale-105 duration-300" src="https://prod2-media.electroplanet.ma/media/catalog/product/cache/fe7218fa206f7a550a07f49b9ea052d6/1/2/1255619_1_1.jpg" alt="request"></img>
                        <p className="text-sm font-bold text-center text-amber-400">Request</p>
                    </div>
                    <div className="text-center md:text-left">
                        <p className="text-xl font-bold">Machine tl9hwa</p>
                        <p className="text-xl">samaykom ana transaction</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <img className="w-24 sm:w-32 border-2 border-green-500 aspect-square rounded-xl hover:scale-105 duration-300" src="https://prod2-media.electroplanet.ma/media/catalog/product/cache/fe7218fa206f7a550a07f49b9ea052d6/1/2/1255619_1_1.jpg" alt="offer"></img>
                        <p className="text-sm font-bold text-center text-green-500">Offer</p>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col gap-4">
                    <div className="flex flex-col text-center gap-0">
                        <p className="text-sm">Minawi hak bussa :</p>
                    </div>
                    <div>
                        <Rating2 />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transaction;
