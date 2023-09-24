import { Box, Button, Container, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect} from "react";
import { socket } from "../../../../socket.io/index";
import { Message } from "@mui/icons-material";
import ModalContext from '../../../context/modalcontext';
import { useContext } from "react";

export default function Msg() {
    socket.connect();
    const { userData } = useContext(ModalContext);
    const [Msg, Setmsg] = useState('');
    const [RecivedMsg, Setrecived] = useState(Array);
    const { MsgContext, setRecivedContext } = useContext(ModalContext);


    async function msgSend() {
        const message = Msg;
        
        Setmsg('');
        
      console.log('this is socket connected: ', socket.connected);
        setTimeout(() => {
                console.log('emit!');

                socket.emit("userMensage", message, userData.user_CPF, 'client', (error) => {
                    console.log('messagem enviada!');
                    if (error) {
                        console.log(error);
                    }
                });
            }, 1000)

            
    };

        var count = 0
            setTimeout(() => {
                console.log('recived!');

                socket.on("userMensage", (message) => {
                   
                    console.log('messagem recebida: ', message);
                    if (count == 0) { 
                        Setrecived(message);
                    }
                    console.log(count);
                    
                    count++
                  });
                  
            }, 2000);
            
            useEffect(()=>{
                if (RecivedMsg != null) {
                    console.log('log RecivedMsg: ', RecivedMsg);
                    
                    setRecivedContext(RecivedMsg);
                }
                
            },[RecivedMsg])
       
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