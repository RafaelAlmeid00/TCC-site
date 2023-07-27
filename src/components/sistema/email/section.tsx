import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../loading";

export default function TrocaEmail() {
    const [validToken, setValidToken] = React.useState(false);
    const navigate = useNavigate()

    React.useEffect(() => {
        async function Verifytoken() {
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');
            try {
               const response = await axios.post('http://localhost:3344/user/validatetoken', { token })
                if (response.data.valid) {
                    setValidToken(true);
                } else {
                    navigate("/");
                }
            } catch (error) {
                console.log(error);
        }
        }
        Verifytoken()
    }, []);

    if (!validToken) {
        return <Loading/>; 
    }

    return(
        <>
        <p color="black">AAAAAAAAAAAAAAA</p>
        </>
    )
}
