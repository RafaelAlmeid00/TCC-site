import { Box, Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect} from "react";
import { socket } from "../../../../socket.io/index";
import { Message } from "@mui/icons-material";


export default function Msg() {
    socket.connect()
    const [Msg, Setmsg] = useState('');

   
    
    async function msgSend() {
        const message = Msg
        Setmsg('');
        
        setTimeout(() => {
            socket.on('connect', ()=> {
                console.log('ss');
                    
                socket.emit("userMensage", message, (error) => {
                    console.log('messagem enviada!');
                    if (error) {
                        console.log(error);
                    }
                });
            })
            socket.on("disconnect", () => {
                console.log('Conexão com o servidor Socket.io foi desconectada');
            });
            
            
        }, 2000);
        
    }
    if (Msg == '') {
        setTimeout(() => {
            console.log('recived!');
            
            const a = socket.on("userMensage", (message: any) => {
                console.log('messagem recebida', message);
              });
              console.log('this is a', a);
        }, 3000);
    }
   

    return(
        <>
        <Box sx={{
            width: "100%",
            height: "10vh",
            backgroundColor: "pink",
        }}>
            <TextField variant="outlined" color="success" label='Digite sua Mensagem...' onChange={i => Setmsg(i.target.value)} value={Msg} sx={{
                width: '70vw',
                marginTop:'10px'
            }} />
            <Button variant="contained" onClick={msgSend} startIcon={<SendIcon />} sx={{
                width: '8%',
                marginTop:'10px',
                height: '8vh',
                ml: '0.5vw'
            }}></Button>
        </Box>
        </>
    )
}