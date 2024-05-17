import React, { useState } from 'react';
import logo from "../../recources/valorant.svg";
import AuthModel from './AuthModel';

const Authentification = () => {
    const [openAuthModel, setOpenAuthModel] = useState(false);
    const [authType, setAuthType] = useState('signin');

    const handleOpenAuthModel = (type) => {
        setAuthType(type);
        setOpenAuthModel(true);
    }

    const handleCloseAuthModel = () => setOpenAuthModel(false);

    return (
        <div className='bg-slate-950 text-neutral-50 min-h-screen max-h-screen flex flex-col md:flex-row'>
            <div className='hidden md:block md:w-1/2 relative'>
                <img src="https://cdn.pixabay.com/photo/2017/02/27/19/22/texture-2104054_960_720.jpg" alt="" className='w-full h-full object-cover' />
                <div className='absolute top-4 left-4'>
                    <img src={logo} alt="logo" height="60" width="60" />
                </div>
            </div>
            <div className='md:w-1/2 px-6 py-12 md:px-10 flex flex-col items-center justify-center'>
                <h1 className='font-bold text-4xl md:text-6xl text-center'>NeedThis <br />Request & Supply in One Place.</h1>
                <h2 className='font-bold text-2xl md:text-3xl py-8 text-center'>Join the Community Now.</h2>
                <div className='w-full max-w-md'>
                    <button
                        onClick={() => handleOpenAuthModel('signup')}
                        className="w-full font-bold py-3 rounded-md bg-[#7c3Aed] hover:bg-[#3e1d76] text-white transition-colors duration-300 mb-4"
                    >
                        Create Account
                    </button>
                    <p className='font-bold py-4 text-center'>Already have an account?</p>
                    <button
                        onClick={() => handleOpenAuthModel('signin')}
                        className="w-full font-bold py-3 rounded-md bg-[#7c3Aed] hover:bg-[#3e1d76] text-white transition-colors duration-300"
                    >
                        Sign In
                    </button>
                </div>
            </div>
            <AuthModel open={openAuthModel} handleClose={handleCloseAuthModel} type={authType} />
        </div>
    )
}

export default Authentification;