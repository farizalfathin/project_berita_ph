/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const NavigatePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/berita/home');
    }, [])
}

export default NavigatePage;