import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import Transaction from "../Transaction/Transaction";
import RightPart from "../RightPart/RightPart";
import glass from "./glass.css";

const TransactionPage = () => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);
    const searchInputRef = useRef(null);

    useEffect(() => {
        if (searchVisible && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [searchVisible]);

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    const toggleFilter = () => {
        setFilterVisible(!filterVisible);
    };

    return (
        <Grid className="relative px-4 py-8 min-h-screen lg:px-28 bg-gray-950 text-white">
            <div className="flex items-center justify-between flex-col sm:flex-row gap-4 w-full mb-8">
                <h2 className="text-2xl font-bold">Transactions</h2>
                <div className="flex items-center gap-2">
                    <div className="flex items-center bg-transparent rounded-lg relative h-8">
                        <label htmlFor="search" className="text-gray-400 mr-2 h-full flex items-center">
                            <i
                                className="bx bx-search-alt text-gray-500 text-2xl cursor-pointer"
                                onClick={toggleSearch}
                            ></i>
                        </label>
                        <AnimatePresence>
                            {searchVisible && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: 'auto' }}
                                    exit={{ width: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden h-full flex items-center"
                                >
                                    <input
                                        type="search"
                                        placeholder="Search transactions..."
                                        id="search"
                                        className="bg-transparent outline-none text-white placeholder-gray-700 border-2 border-gray-500 rounded-lg px-2 py-2 h-full"
                                        ref={searchInputRef}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="relative">
                        <button
                            className="flex items-center bg-transparent border-2 border-gray-500 rounded-lg hover:bg-gray-800 h-8 px-2 transition-colors duration-300"
                            onClick={toggleFilter}
                        >
                            <i className="bx bx-filter text-gray-500 text-2xl"></i>
                            <span className="hidden md:block ml-2 text-gray-400 px-4 py-0">Filter</span>
                        </button>
                    </div>
                </div>
            </div>

            {filterVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative glass rounded-lg shadow-lg w-11/12 sm:w-3/4 lg:w-1/2 p-4 sm:p-8">
                        <button
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
                            onClick={toggleFilter}
                        >
                            <i className="bx bx-x text-2xl"></i>
                        </button>
                        <h3 className="text-gray-400 font-semibold mb-4">Filter by Category</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <ul className="space-y-2">
                                <li>
                                    <button className="text-white hover:text-gray-400">
                                        Category 1
                                    </button>
                                </li>
                                <li>
                                    <button className="text-white hover:text-gray-400">
                                        Category 2
                                    </button>
                                </li>
                                <li>
                                    <button className="text-white hover:text-gray-400">
                                        Category 3
                                    </button>
                                </li>
                            </ul>
                            <ul className="space-y-2">
                                <li>
                                    <button className="text-white hover:text-gray-400">
                                        Category 4
                                    </button>
                                </li>
                                <li>
                                    <button className="text-white hover:text-gray-400">
                                        Category 5
                                    </button>
                                </li>
                                <li>
                                    <button className="text-white hover:text-gray-400">
                                        Category 6
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col items-center w-full">
                <Transaction className="mb-4 w-full bg-gray-700 rounded-lg p-4" />
                <Transaction className="mb-4 w-full bg-gray-700 rounded-lg p-4" />
                <Transaction className="mb-4 w-full bg-gray-700 rounded-lg p-4" />
                <Transaction className="mb-4 w-full bg-gray-700 rounded-lg p-4" />
                <Transaction className="mb-4 w-full bg-gray-700 rounded-lg p-4" />
                <Transaction className="mb-4 w-full bg-gray-700 rounded-lg p-4" />
                <Transaction className="mb-4 w-full bg-gray-700 rounded-lg p-4" />
                <Transaction className="mb-4 w-full bg-gray-700 rounded-lg p-4" />
                <Transaction className="mb-4 w-full bg-gray-700 rounded-lg p-4" />
                <Transaction className="mb-4 w-full bg-gray-700 rounded-lg p-4" />
                <Transaction className="mb-4 w-full bg-gray-700 rounded-lg p-4" />
                <Transaction className="w-full bg-gray-700 rounded-lg p-4" />
            </div>
        </Grid>
    );
};

export default TransactionPage;
