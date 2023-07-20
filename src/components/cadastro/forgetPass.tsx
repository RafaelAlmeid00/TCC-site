import { Input, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";


export default function EsqueciAsenha() {
    const [cpf, Setcpf] = useState('');
    
    return (
        <>
            
            <Typography>Seu cpf: </Typography>
            <Input onChange={i => Setcpf(i.target.value)}></Input>
        </>
    )
}
