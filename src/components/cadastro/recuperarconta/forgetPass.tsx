import { Input, Typography, InputAdornment, Button} from "@mui/material";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function EsqueciAsenha() {
    const [cpf, Setcpf] = useState('');
    
    const navi = useNavigate();

    function nav() {
        try {
            navi('/rec')
        } catch (error) {
            console.log(error);
            
        }
        
    }

    return (
        <>
            
            <Typography>Seu cpf: </Typography>
            <Input
                inputProps={{ maxLength: 11 }}
                required
                value={cpf}
                placeholder="Insira seu CPF"
                onChange={(event) => {
                    const { value } = event.target;
                    const newValue = value.replace(/\D/g, ''); 
                    Setcpf(newValue);
                }}
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                        
                    </InputAdornment>
                }
                sx={{ fontSize: '14px' }}
            />
            <Button onClick={nav}>Continue >></Button>
        </>
    )
}
