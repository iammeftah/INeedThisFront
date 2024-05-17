import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useLocation, useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 600,
    boxShadow: 24,
    p: 4,
    borderRadius: "4px",
    outline: "none"
};

export default function AuthModel({ open, handleClose, type }) {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigate = () => {
        const path = location.pathname === "/signup" ? "/signin" : "/signup";
        navigate(path);
    }

    return (
        <div className="overflow-y-auto">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="bg-gray-950 text-white">
                    <div className="px-4 sm:px-8">
                        {location.pathname === "/signup" || type === 'signup' ? <SignUp /> : <SignIn />}

                        <h1 className='text-md my-2 text-center sm:text-xl'>
                            {location.pathname === "/signup" ? "Already registered? Sign in." : "Don't have an account? Join us."}
                        </h1>

                        <button
                            className="w-full font-bold p-2 sm:p-3 rounded-md border-2 border-[#7c3Aed] hover:bg-[#7c3Aed] hover:shadow-[_0px_0px_30px_4px_rgba(124,58,237,0.25)] duration-300 text-white"
                            onClick={handleNavigate}
                        >
                            {location.pathname === "/signin" || type === 'signup' ? "signup" : "signin"}
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}