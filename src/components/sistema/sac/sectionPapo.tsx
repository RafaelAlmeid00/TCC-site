import { Box, Container, Card, Typography } from "@mui/material";
import ModalContext from "../../../context/modalcontext";
import { useContext, useEffect, useState, useRef } from "react";
import React from "react";

export default function Adalberto() {
  const { verify } = React.useContext(ModalContext);
  const { themes } = React.useContext(ModalContext);
  const fundo = themes.palette.background.default;
  const { MsgContext } = useContext(ModalContext);
  const [User, setUser] = useState(false);
  const [Adm, setAdm] = useState(false);

  useEffect(() => {
    if (MsgContext != null) {
      var last = MsgContext.length - 1;
      console.log("length: ", MsgContext[last]);
      //n da pra usar MsgContext[last].user_user_CPF num if só pq a porra do user_user_CPF tá undefinied
      //Obvio né poha o routes q pega o user e o routes roda antes de logar poha, tem q user userData && userData.user_CPF =
      if (MsgContext[last]) {
        if (MsgContext[last].user_user_CPF) {
          setUser(true);
        } else {
          setAdm(true);
        }
      }
    }
  }, [MsgContext]);
  //aa
  return (
    <>
      <Box
        sx={{
          backgroundColor: verify ? fundo : "white",
          width: "50%",
          height: "100%",
          mb: 8,
          mt: 3
        }}
      >
        {User == true
          ? MsgContext.map((x) => {
              console.log("this is msgArray", x);
              return (
                <>
                  {
                    <Card
                      key={x.sacmen_id}
                      sx={{
                        ml: "8vw",
                        mb: "2vh",
                        width: "auto",
                        maxWidth: "100%",
                        display: "table",
                        backgroundColor: 'rgb(50, 50, 50)',
                        paddingTop: 2,
                        paddingBottom: 2
                      }}
                    >
                      <Container>
                        <Typography
                          style={{
                            wordWrap: "break-word", // Quebra de palavra
                            maxWidth: "250px", // Largura máxima para ajuste de texto
                            color: 'white'
                          }}
                        >
                          {x.sacmen_texto}
                        </Typography>
                      </Container>
                    </Card>
                  }
                </>
              );
            })
          : () => {
              return null;
            }}
      </Box>
    </>
  );
}
