import { Box, Button, Container, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect } from "react";
import { socket } from "../../../../socket.io/index";
import { Message } from "@mui/icons-material";
import ModalContext from "../../../context/modalcontext";
import { useContext } from "react";
import React from "react";

export default function Msg() {
  const { verify } = React.useContext(ModalContext);
  const { themes } = React.useContext(ModalContext);
  const fundo = themes.palette.background.default;
  socket.connect();
  const { userData } = useContext(ModalContext);
  const [msg, setMsg] = useState("");
  const [recivedMsg, setRecived] = useState([]);
  const { MsgContext, setRecivedContext } = useContext(ModalContext);
  const [charCount, setCharCount] = useState(0);
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
      setRecivedContext(recivedMsg);
    }
  }, [recivedMsg]);

  const handleInputChange = (event) => {
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
        userData.user_CPF,
        "client",
        (error) => {
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

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          mt: "77vh",
          height: "10vh",
          background: verify ? fundo : "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: 3,
          paddingBottom: 3,
        }}
      >
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
            width: "70vw",
            marginTop: "10px",
          }}
        />

        <Button
          variant="contained"
          onClick={msgSend}
          endIcon={<SendIcon />}
          sx={{
            width: "7%",
            marginTop: "10px",
            height: "7vh",
            ml: "0.5vw",
          }}
        />
      </Box>
    </>
  );
}
