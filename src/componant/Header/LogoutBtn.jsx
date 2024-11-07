import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

const LogoutBtn = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const logoutHandler = async () => {
        setLoading(true);
        try {
            await authService.logout();
            dispatch(logout());
        } catch (error) {
            console.error("Logout failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutHandler}
            disabled={loading}
        >
            {loading ? "Logging out..." : "Logout"}
        </button>
    );
};

export default LogoutBtn;
