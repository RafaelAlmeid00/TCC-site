import { Box, Container, Skeleton, Card, Typography } from "@mui/material";
import ModalContext from '../../../context/modalcontext';
import { useContext, useEffect, useState } from "react";

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


  return (
    <>
      <Box
        sx={{
          backgroundColor: "green",
          width: "40vw",
          height: "79.7vh"
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: "blue",
          width: "40vw",
          height: "79.7vh",
        }}>
        
        <Container sx={{
                width: "50vw",
                height: "10vh",
                backgroundColor: "white"
              }} >
                {
                  User == true ? (
                    
                    MsgContext.map((x) =>{

                      console.log('this is msgArray', x);
                        return <>{
                          <Card key={x.sacmen_id} sx={{
                            width: '100%',
                            height: '20vh'
                          }}>
                            <Container>
                              <Typography >{x.sacmen_texto}</Typography>
                            </Container>
                          </Card>
                        }</>}) 

                    ) : ( 
                      () =>{ return null}
                    )
                }
        </Container>

      </Box>
    </>
  );
}
