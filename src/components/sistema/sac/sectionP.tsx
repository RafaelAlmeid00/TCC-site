import { Box, Button, Card, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { socket } from "../../../../socket.io/index";
import ModalContext from "../../../context/modalcontext";

export default function SectionP() {

  const { verify } = React.useContext(ModalContext);
  const { themes } = React.useContext(ModalContext);
  const fundo = themes.palette.background.default
  const [user, setUser] = useState(false);
  const [, setIsAdmin] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);;
  socket.connect();
  const { userData } = useContext(ModalContext);
  const [msg, setMsg] = useState<any>('');
  const [recivedMsg, setRecived] = useState<any>([]);
  const [, setCharCount] = useState(0);
  const maxCharCount = 500;
  const [bool, setBool] = useState(Boolean);
  const [bool1, setBool1] = useState(true);

  const handleInputChange = (event: any) => {
    const inputText = event.target.value;
    if (inputText.length <= maxCharCount) {
      setMsg(inputText);
      setCharCount(inputText.length);
    }
  };

  const msgSend = () => {
    if (!bool) {
      setBool(true)
    }
    if (msg.length <= maxCharCount) {
      console.log("this is socket connected: ", socket.connected);
      console.log("emit!");
      const message = msg;

      socket.emit(
        "userMensage",
        message,
        userData ? userData.user_CPF : '',
        'send',
        "client",
        (error: any) => {
          setMsg('');
          console.log("messagem enviada!");
          setMsg('');
          if (error) {
            console.log(error);
            setMsg('');
          }
        }
      );

      setTimeout(() => {
        socket.on("userMensage", (message) => {
          console.log("messagem recebida: ", message);
          setRecived(message);
          setBool(false)
        });
      }, 1000);
      setMsg('')
    } else {
      alert("A mensagem não pode ter mais de 500 caracteres.");
    }
  };

  setTimeout(() => {
    console.log("messagem enviada!");

    socket.on("userMensage", (message) => {
      console.log("messagem recebida: ", message);
      setRecived(message);
      setBool(false)
    });
  }, 1000);

  if (bool1) {
    socket.emit(
      "userMensage",
      'not',
      userData ? userData.user_CPF : '',
      'all',
      "client",
      (error: any) => {
        console.log("messagem enviada!");
        setBool1(false)
        if (error) {
          console.log(error);
          setMsg('');
        }
      }
    );
  }

  useEffect(() => {
    console.log("aaaaaaaaaaa");
    console.log('aaaaa', recivedMsg);


    setTimeout(() => {
      messagesContainerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setTimeout(() => {
        messagesContainerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }, 500);
    }, 1000);


    if (recivedMsg && recivedMsg.length > 0) {
      const lastMessage = recivedMsg[recivedMsg.length - 1];

      if (lastMessage.user_user_CPF) {
        setUser(true);
        setIsAdmin(false);
      } else {
        setUser(false);
        setIsAdmin(true);
      }
    }

  }, [recivedMsg.length]);



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
            alignItems: 'stretch',
            overflowY: "auto",
            height: recivedMsg ? '88%' : '80%'
          }}>


            <div
              style={{
                height: "100%",
                position: "relative"
              }}
            >
              {recivedMsg.map((message: any, index: any) => (
                <Card
                  key={message.sacmen_id}
                  sx={{
                    ml: message.admin_adm_id ? 7 : 'auto',
                    mr: message.admin_adm_id ? 'auto' : 7,
                    width: "auto",
                    maxWidth: "100%",
                    display: "table",
                    backgroundColor: message.admin_adm_id ? 'rgb(60, 60, 60)' : "rgb(30, 30, 30)",
                    paddingTop: 2,
                    paddingBottom: 2,
                    mb: index == recivedMsg.length ? 5 : 2,
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
                  <div ref={messagesContainerRef}></div>
                </Card>
              ))}
            </div>
          </Container>

          <Container sx={{
            height: recivedMsg ? '10vh' : '25vh',
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
              disabled={bool === undefined ? false : bool}
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
