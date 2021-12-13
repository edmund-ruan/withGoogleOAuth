import React, {useEffect} from 'react';
import { useNavigate } from 'react-router';


const Homepage = ({
    checkAuthStatus
}) => {

    const navigate = useNavigate();

    const checkAuth = async () => {
        try {
            const auth = await checkAuthStatus();
            if (auth) {
                navigate("/dashboard")
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        checkAuth();
    }, [])

    return (
        <h1>Welcome to my homepage</h1>
    )
}

export default Homepage