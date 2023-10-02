import { Box, Button, Card, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { socket } from "../../../../socket.io/index";
import ModalContext from "../../../context/modalcontext";

export default function SectionP() {

  const { verify } = React.useContext(ModalContext);
  const { themes } = React.useContext(ModalContext);
  const fundo = themes.palette.background.default
  const { MsgContext } = useContext(ModalContext);
  const [user, setUser] = useState(false);
  const [, setIsAdmin] = useState(false);
  const messagesContainerRef: any = useRef(null);

  socket.connect();
  const { userData } = useContext(ModalContext);
  const [msg, setMsg] = useState("");
  const [recivedMsg, setRecived] = useState([]);
  const { setRecivedContext } = useContext(ModalContext);
  const [, setCharCount] = useState(0);
  const maxCharCount = 500;

  useEffect(() => {
    socket.on("userMensage", (message) => {
      console.log("messagem recebida: ", message);
      setRecived(message);
    });
  }, [msg]);

  useEffect(() => {
    if (recivedMsg.length > 0) {
      console.log("log RecivedMsg: ", recivedMsg);
      if (setRecivedContext) {
        setRecivedContext(recivedMsg);
      }
    }
  }, [recivedMsg]);

  const handleInputChange = (event: any) => {
    const inputText = event.target.value;
    if (inputText.length <= maxCharCount) {
      setMsg(inputText);
      setCharCount(inputText.length);
    }
  };

  const msgSend = () => {
    if (msg.length <= maxCharCount) {
      const message = msg;
      setMsg(""); // Limpa o input
      console.log("this is socket connected: ", socket.connected);
      console.log("emit!");
      socket.emit(
        "userMensage",
        message,
        userData ? userData.user_CPF : '',
        "client",
        (error: any) => {
          console.log("messagem enviada!");
          if (error) {
            console.log(error);
          }
        }
      );
    } else {
      alert("A mensagem não pode ter mais de 500 caracteres.");
    }
  };


  useEffect(() => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      // Role para o último elemento apenas se houver mensagens
      if (MsgContext && MsgContext.length > 0) {
        container.scrollTop = container.scrollHeight - container.clientHeight;
        console.log('this is ref: ', messagesContainerRef);
        console.log('this is ref current: ', messagesContainerRef.current);
        console.log('this is container: ', container);
        console.log('this is container scrolltop: ', container.scrollTop);
        console.log('this is container scrollHeight: ', container.scrollHeight);
        console.log('this is container clientHeight: ', container.clientHeight);


      }
    }
  }, [MsgContext]);

  useEffect(() => {
    if (MsgContext && MsgContext.length > 0) {
      const lastMessage = MsgContext[MsgContext.length - 1];

      if (lastMessage.user_user_CPF) {
        setUser(true);
        setIsAdmin(false);
      } else {
        setUser(false);
        setIsAdmin(true);
      }
    }
  }, [MsgContext]);

  return (
    <>
      <Box id="section1" sx={{
        width: '80vw',
        float: "right",
        background: verify ? fundo : 'white',
        position: "relative",
        overflowX: 'hidden',
        overflowY: 'hidden',
        height: '92.7vh'

      }}>
        <Grid sx={{
          height: '100%',
          flex: 1,
        }}>
          <Container sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            alignItems: 'flex-end',
            overflowY: "auto",
            height: MsgContext ? '88%' : '80%'
          }}>


            <div
              ref={messagesContainerRef}
              style={{
                height: "100%",
                position: "relative"
              }}
            >
              {user && MsgContext.map((message: any, index: any) => (
                <Card
                  key={message.sacmen_id}
                  sx={{
                    ml: 'auto', // Alinha à direita
                    width: "auto",
                    maxWidth: "100%",
                    display: "table",
                    backgroundColor: "rgb(50, 50, 50)",
                    paddingTop: 2,
                    paddingBottom: 2,
                    mr: 7,
                    mb: index == MsgContext.length ? 5 : 2,
                    mt: index == 0 ? 5 : 0,

                  }}
                >
                  <Container>
                    <Typography
                      style={{
                        wordWrap: "break-word",
                        maxWidth: "30vw",
                        color: "white",
                        textAlign: 'left', // Alinha o texto à direita
                      }}
                    >
                      {message.sacmen_texto}
                    </Typography>
                  </Container>
                </Card>
              ))}
            </div>
          </Container>

          <Container sx={{
            height: MsgContext ? '10vh' : '25vh',
            background: verify ? fundo : 'white',
            ml: 3,
            marginBottom: '20px', // Ajuste conforme necessário
            display: 'flex',
            alignItems: 'center',
          }}>

            <TextField
              variant="outlined"
              color="success"
              label="Digite sua Mensagem..."
              onChange={handleInputChange}
              value={msg}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  msgSend();
                }
              }}
              sx={{
                width: "65vw",
              }}
            />

            <Button
              variant="contained"
              onClick={msgSend}
              endIcon={<SendIcon />}
              sx={{
                width: "6%",
                height: "6.5vh",
                ml: "0.5vw",
              }}
            />
          </Container>
        </Grid>
      </Box>
    </>
  );
}
