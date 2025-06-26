import React, { useContext } from 'react'

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessMessage.css";
import { AppContext } from '../../context/AppContext';

function EnquiredSucessfully() {
    const [countdown, setCountdown] = useState(7);
    const navigate = useNavigate();
    const { isSubmitted,setIsSubmitted } = useContext(AppContext);

    useEffect(() => {
        if (!isSubmitted) {
            navigate('/error');
        
        }
    }, [isSubmitted, navigate]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        const timeout = setTimeout(() => {
            navigate("/");

            
            
        }, 7000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [navigate]);
    return (
        <>
            <div className="success-container">
                <div className="success-box">
                    <h1>Enquired successfully!</h1>
                    <p>You have successfully enquired.We will contact you soon</p>
                    <p className="countdown">Redirecting in {countdown} seconds...</p>
                </div>
            </div>

        </>
    )
}

export default EnquiredSucessfully
