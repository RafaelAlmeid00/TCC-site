import { Box, Container, Card, Typography } from "@mui/material";
import ModalContext from "../../../context/modalcontext";
import { useContext, useEffect, useState } from "react";
import React from "react";

export default function Adalberto() {
  const { verify } = React.useContext(ModalContext);
  const { themes } = React.useContext(ModalContext);
  const fundo = themes.palette.background.default;
  const { MsgContext } = useContext(ModalContext);
  const [user, setUser] = useState(false);
  const [, setIsAdmin] = useState(false);


  useEffect(() => {
    if (MsgContext && MsgContext.length > 0) {
      const lastMessage = MsgContext[MsgContext.length - 1];
      console.log("Last message: ", lastMessage);

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
      <Box
        sx={{
          backgroundColor: verify ? fundo : "white",
          mb: 15,
          mt: 5,
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          alignItems: "end",
          width: "80vw",
          ml: -10,
        }}
      >
        {user && MsgContext.map((message: any) => (
          <Card
            key={message.sacmen_id}
            sx={{
              ml: "8vw",
              mb: "2vh",
              width: "auto",
              maxWidth: "100%",
              display: "table",
              backgroundColor: "rgb(50, 50, 50)",
              paddingTop: 2,
              paddingBottom: 2,
            }}
          >
            <Container>
              <Typography
                style={{
                  wordWrap: "break-word",
                  maxWidth: "250px",
                  color: "white",
                }}
              >
                {message.sacmen_texto}
              </Typography>
            </Container>
          </Card>
        ))}
      </Box>
    </>
  );
}