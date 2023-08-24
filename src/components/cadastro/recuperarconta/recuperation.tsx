import { Button, Input, Typography, Box } from "@mui/material";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { DeccodeItem, DecodedItem2} from "../../sistema/FrontDecoded";
import { useNavigate } from "react-router-dom";



function EsqueciAsenha() {
    const navi = useNavigate()
    const RecToken = localStorage.getItem('item');
    const [code, Setcode] = useState('');
    var datadecode = {dt: DeccodeItem()};
    console.log('this is datadecode: ', datadecode.dt.email);
    
    async function initialized() {
        const response = await axios.post( 'http://localhost:3344/user/login/Rec',{
            RecToken: RecToken,
            code: code
        })
        console.log(response);
        if (response.status == 201) {
            localStorage.setItem('item', String(response.data.RecToken));
            var s = DecodedItem2();
            console.log('aaaaaaaaaaaaaaaaaaaaaa: ', s);
            if (s == 'erro') {
                alert('código errado!');
                console.log('dcxz');
            
            }else{
                navi(s);
                console.log('teste');
                
            }
        }
        
        
    }

    return (
        <>
            <Box sx={{
                marginLeft: '30vw',
                marginTop: '6vh',
                border: 1,
                borderRadius: 3,
                width: '40vw',
            }}>
                <Typography>insira o código que enviamos para {String(datadecode.dt.email)} </Typography>
                <Input onChange={i => Setcode(i.target.value)}></Input>
                <Button onClick={initialized}>enviar</Button>
            </Box>
        </>
    )
}
export default EsqueciAsenha