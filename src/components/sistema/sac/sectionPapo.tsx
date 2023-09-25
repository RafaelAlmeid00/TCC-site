import { Box, Container, Skeleton, Card, Typography } from "@mui/material";
import ModalContext from '../../../context/modalcontext';
import { useContext, useEffect, useState, useRef } from "react";

export default function Adalberto() {
  const { MsgContext } = useContext(ModalContext);
  const [ User, setUser ] = useState(false);
  const [ Adm, setAdm ] = useState(false);
 
  
  useEffect(()=>{
    if (MsgContext != null) {
      var last = MsgContext.length - 1;
      console.log('length: ', MsgContext[last]);
      //n da pra usar MsgContext[last].user_user_CPF num if só pq a porra do user_user_CPF tá undefinied
      if (MsgContext[last]) {
        if (MsgContext[last].user_user_CPF) {
          setUser(true);
        }else{
          setAdm(true)
        }
      }
      
    }
    
    
  }, [MsgContext]);
//aa
  return (
    <>
      <Box
        sx={{
          backgroundColor: "green",
          width: "42%",
          height: "79.7vh"
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: "blue",
          width: "50%",
          height: "79.7vh",
          overflowY: "auto",
          border: '1px solid #000',
          overflowX: "hidden",
          whiteSpace: "nowrap"
        }}>
        
                {
                  User == true ? (
                    
                    MsgContext.map((x) =>{

                      console.log('this is msgArray', x);
                        return <>{
                          <Card key={x.sacmen_id} sx={{
                            ml: '20vw',
                            mb: '2vh',
                            width: 'auto',
                            maxWidth: "100%",
                            display: 'table',
                            backgroundColor: "#E6DDDD",
                          }}>
                            <Container >
                              <Typography  style={{
                                wordWrap: 'break-word', // Quebra de palavra
                                maxWidth: '250px', // Largura máxima para ajuste de texto
                                
                              }}>{x.sacmen_texto}</Typography>
                            </Container>
                          </Card>
                        }</>}) 

                    ) : ( 
                      () =>{ return null}
                    )
                }
 

      </Box>
    </>
  );
} 
