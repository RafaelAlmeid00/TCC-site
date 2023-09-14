import { Box, Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect} from "react";
import { socket } from "../../../../socket.io/index";
import { Message } from "@mui/icons-material";


export default function Msg() {
    
    const [Msg, Setmsg] = useState('');

    const userToken = localStorage.getItem('token')
    useEffect(() => {
        if (userToken) {
            socket.connect()
        } else {
            console.log('sem token sem connect');
        
        }
  }, [userToken])

    async function msgSend() {
        const message = Msg
        Setmsg('');
        
        setTimeout(() => {
            console.log('aaaaaaaaa', socket);
            socket.emit("userMensage", message, (err: any) => {
                console.log('messagem enviada!');
                if (err) {
                  console.log('error');
                }
              });
              
            
        }, 2000);
        
    }
    if (Msg == '') {
        setTimeout(() => {
            console.log('recived!');
            
            const a = socket.on("userMensage", message => {
                console.log('messagem recebida', message);
              });
              console.log(a);
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