import { Button, Input, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function EsqueciAsenha() {
    const RecToken = localStorage.getItem('item');
    const [code, Setcode] = useState('');
    async function a() {
        await axios.post( 'http://localhost:3344/user/login/Rec',{
            RecToken: RecToken,
            code: code
        })
    }

    return (
        <>
            <Typography>insira o código que enivamos para </Typography>
            <Input onChange={i => Setcode(i.target.value)}></Input>
            <Button onClick={a}>enviar</Button>
        </>
    )
}
export default EsqueciAsenha